import logging
from itertools import groupby

import requests

from companies.models import CompanyNameSuffix
from companies.services.clearbit.clearbit import ClearbitAPI, ClearbitError

logger = logging.getLogger(__name__)


def normalize_company(name):
    normalized = name.strip()

    suffixes = CompanyNameSuffix.objects\
        .values_list('suffix', flat=True)\
        .iterator()

    suffixes = groupby(suffixes, key=len)

    for length, items in suffixes:
        if normalized.endswith(tuple(items)):
            return normalized[:-length].strip()

    return normalized


def update_details(company):
    api = ClearbitAPI(timeout=10)

    try:
        name = normalize_company(company.name)
        suggestions = api.autocomplete(name)

        for suggestion in suggestions:
            if suggestion['name'] == name:
                company.logo = suggestion['logo']
                company.website = 'http://{}'.format(suggestion['domain'])
                company.has_extra_info = True
                company.save()
                return
    except (requests.exceptions.RequestException, ClearbitError) as e:
        logger.exception(e)

    company.has_extra_info = False
    company.save()


def company_info(company):
    if company.has_extra_info is None:
        update_details(company)

    return company
