from alpha_vantage.timeseries import TimeSeries
from django.conf import settings


def company_stock_valuation(company):
    ts = TimeSeries(key=settings.ALPHA_VANTAGE_API_KEY)

    data, _ = ts.get_quote_endpoint(company.symbol)

    return {
        'open': data['02. open'],
        'high': data['03. high'],
        'low': data['04. low'],
        'close': data['05. price'],
        'price': data['05. price'],
        'volume': data['06. volume']
    }

