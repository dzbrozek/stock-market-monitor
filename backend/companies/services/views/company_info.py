import logging

import requests

from companies.services.clearbit.clearbit import ClearbitAPI, ClearbitError

logger = logging.getLogger(__name__)


def update_details(company):
    api = ClearbitAPI(timeout=10)

    try:
        suggestions = api.autocomplete(company.name)

        for suggestion in suggestions:
            if suggestion['name'] == company.name:
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
