from unittest import mock

from django.test import TestCase, Client
from django.urls import reverse

from companies.serializers import CompanyInfoSerializer
from companies.tests.factories import CompanyFactory


class CompanyInfoViewTest(TestCase):

    def setUp(self):
        self.client = Client()

        self.url = reverse('company-info')

    @mock.patch('companies.services.views.company_info.company_info')
    def test_view(self, company_info_mock):
        company = CompanyFactory()
        company_info_mock.return_value = company

        data = dict(company=company.symbol)

        response = self.client.get(self.url, data=data)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), CompanyInfoSerializer(company).data)
        company_info_mock.assert_called_once_with(company)
