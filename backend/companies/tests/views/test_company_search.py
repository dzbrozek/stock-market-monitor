from unittest import mock

from django.test import TestCase, Client
from django.urls import reverse

from companies.serializers import CompanySearchSerializer
from companies.tests.factories import CompanyFactory


class CompanySearchViewTest(TestCase):

    def setUp(self):
        self.client = Client()

        self.url = reverse('company-search')

    @mock.patch('companies.services.views.company_search.company_search')
    def test_view(self, company_search_mock):
        company = CompanyFactory()
        company_search_mock.return_value = [company]

        response = self.client.get(self.url)

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json(), ['Missing query parameter'])

        data = dict(query='AA')

        response = self.client.get(self.url, data)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), [CompanySearchSerializer(company).data])
        company_search_mock.assert_called_once_with(data['query'])
