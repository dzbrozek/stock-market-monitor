from unittest import mock

from django.test import Client, TestCase
from django.urls import reverse

from companies.tests.factories import CompanyFactory


class CompanyStockValuationTest(TestCase):

    def setUp(self):
        self.client = Client()

        self.url = reverse('company-stock-valuation')

    @mock.patch('companies.services.views.company_stock_valuation.company_stock_valuation')
    def test_view(self, company_stock_valuation_mock):
        company_stock_valuation_mock.return_value = dict(open='107.8900', high='111.0800', low='107.8600',
                                                         close='110.7966', price='110.7966', volume='27402176')
        company = CompanyFactory()

        data = dict(company=company.symbol)
        response = self.client.get(self.url, data=data)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), company_stock_valuation_mock.return_value)
        company_stock_valuation_mock.assert_called_once_with(company)

