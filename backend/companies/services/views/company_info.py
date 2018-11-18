import requests

from companies.services.clearbit.clearbit import ClearbitAPI, ClearbitError


def update_details(company):
    api = ClearbitAPI(timeout=10)

    try:
        suggestions = api.autocomplete(company.name)
        for suggestion in suggestions:
            if suggestion['name'] == company.name:
                company.logo = suggestion['logo']
                company.website = 'http://{}'.format(suggestion['domain'])
                company.has_extra_info = True
                return
    except (requests.exceptions.RequestException, ClearbitError):
        pass

    company.has_extra_info = False
    company.save()


def company_info(company):
    if company.has_extra_info is None:
        update_details(company)

    return company
