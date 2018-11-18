from alpha_vantage.timeseries import TimeSeries
from django.conf import settings

from companies.models import Company


def save_company(data):
    defaults = {
        'name': data['2. name'],
        'market_open': data['5. marketOpen'],
        'market_close': data['6. marketClose'],
        'timezone': data['7. timezone'].replace('UTC', '')
    }
    company, _ = Company.objects.update_or_create(symbol=data['1. symbol'], defaults=defaults)

    return company


def company_search(query):
    found = []
    ts = TimeSeries(key=settings.ALPHA_VANTAGE_API_KEY)

    companies, _ = ts.get_symbol_search(query)

    for company in companies:
        found.append(save_company(company))

    return found
