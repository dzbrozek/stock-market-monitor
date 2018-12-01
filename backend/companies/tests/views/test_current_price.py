from unittest import mock

from django.test import TestCase, Client
from django.urls import reverse

from companies.tests.factories import CompanyFactory


class CompanyCurrentPriceTest(TestCase):

    def setUp(self):
        self.client = Client()

        self.url = reverse('company-current-price')

    @mock.patch('companies.services.views.company_current_price.company_current_price')
    def test_view(self, company_current_price_mock):
        company_current_price_mock.return_value = dict(is_open=True, price='12.532')

        company = CompanyFactory()

        data = dict(company=company.symbol)
        response = self.client.get(self.url, data=data)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), company_current_price_mock.return_value)
        company_current_price_mock.assert_called_once_with(company)


