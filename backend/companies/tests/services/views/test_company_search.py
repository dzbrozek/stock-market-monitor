import datetime
from unittest import mock

from django.test import TestCase

from companies.models import Company
from companies.services.views.company_search import save_company, company_search


class CompanySearchTest(TestCase):

    def test_save_company(self):
        data = {
            '1. symbol': 'AAPL',
            '2. name': 'Apple Inc.',
            '3. type': 'Equity',
            '4. region': 'United States',
            '5. marketOpen': '09:30',
            '6. marketClose': '16:00',
            '7. timezone': 'UTC-05',
            '8. currency': 'USD',
            '9. matchScore': '1.0000'
        }

        company = save_company(data)
        company.refresh_from_db()

        self.assertEqual(company.symbol, 'AAPL')
        self.assertEqual(company.name, 'Apple Inc.')
        self.assertEqual(company.market_open, datetime.time(9, 30))
        self.assertEqual(company.market_close, datetime.time(16, 0))
        self.assertEqual(company.timezone, -5.0)

        save_company(data)
        self.assertEqual(Company.objects.count(), 1)

    @mock.patch('companies.services.views.company_search.TimeSeries')
    def test_company_search(self, time_series_mock):
        time_series_mock.return_value.get_symbol_search.return_value = (
            [{
                '1. symbol': 'AAPL',
                '2. name': 'Apple Inc.',
                '3. type': 'Equity',
                '4. region': 'United States',
                '5. marketOpen': '09:30',
                '6. marketClose': '16:00',
                '7. timezone': 'UTC-05',
                '8. currency': 'USD',
                '9. matchScore': '1.0000'
            }, {
                '1. symbol': 'AAPL.MEX',
                '2. name': 'Apple Inc.',
                '3. type': 'Equity',
                '4. region': 'Mexico',
                '5. marketOpen': '08:30',
                '6. marketClose': '15:00',
                '7. timezone': 'UTC-06',
                '8. currency': 'MXP', '9. matchScore': '0.7273'
            }],
            None
        )
        query = 'Apple'

        companies = company_search(query)

        self.assertEqual(len(companies), 2)
