from unittest import mock

from django.conf import settings
from django.test import TestCase

from companies.services.views.company_stock_valuation import company_stock_valuation
from companies.tests.factories import CompanyFactory


class CompanyStockValuationTest(TestCase):

    @mock.patch('companies.services.views.company_stock_valuation.TimeSeries')
    def test_company_stock_valuation(self, time_series_mock):
        company = CompanyFactory()

        time_series_mock.return_value.get_quote_endpoint.return_value = (
            {
                '01. symbol': 'AAPL',
                '02. open': '176.7300',
                '03. high': '181.2600',
                '04. low': '174.9300',
                '05. price': '180.9400',
                '06. volume': '42348987',
                '07. latest trading day': '2018-11-28',
                '08. previous close': '174.2400',
                '09. change': '6.7000',
                '10. change percent': '3.8453%'
            },
            None
        )

        response = company_stock_valuation(company)
        self.assertDictEqual(response, {
            'open': '176.7300',
            'high': '181.2600',
            'low': '174.9300',
            'close': '180.9400',
            'price': '180.9400',
            'volume': '42348987'
        })
        time_series_mock.assert_called_once_with(key=settings.ALPHA_VANTAGE_API_KEY)
        time_series_mock.return_value.get_quote_endpoint.assert_called_once_with(company.symbol)

