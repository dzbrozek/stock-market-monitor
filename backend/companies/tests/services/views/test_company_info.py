from unittest import mock

from django.test import TestCase

from companies.services.clearbit.clearbit import ClearbitError
from companies.services.views.company_info import company_info, normalize_company, update_details
from companies.tests.factories import CompanyFactory, CompanyNameSuffixFactory


class CompanyInfoTest(TestCase):

    @mock.patch('companies.services.views.company_info.update_details')
    def test_company_info(self, update_details_mock):
        company = CompanyFactory(has_extra_info=False)

        company_info(company)

        update_details_mock.assert_not_called()

        company = CompanyFactory(has_extra_info=True)

        company_info(company)

        update_details_mock.assert_not_called()

        company = CompanyFactory(has_extra_info=None)

        company_info(company)

        update_details_mock.assert_called_once_with(company)

    def test_normalize_company(self):
        name = 'American Airlines Group Inc.'

        self.assertEqual(normalize_company(name), 'American Airlines Group Inc.')

        CompanyNameSuffixFactory(suffix='Corp.')

        self.assertEqual(normalize_company(name), 'American Airlines Group Inc.')

        CompanyNameSuffixFactory(suffix='Inc.')

        self.assertEqual(normalize_company(name), 'American Airlines Group')

    @mock.patch('companies.services.views.company_info.ClearbitAPI.autocomplete')
    def test_update_details(self, autocomplete_mock):
        autocomplete_mock.return_value = [
            {
                "name": "Alphabet",
                "domain": "abc.xyz",
                "logo": "https://logo.clearbit.com/abc.xyz"
            },
            {
                "name": "Alpha Beta Gamer",
                "domain": "alphabetagamer.com",
                "logo": "https://logo.clearbit.com/alphabetagamer.com"
            }
        ]

        company = CompanyFactory(has_extra_info=None, name='Alphabet Signs')

        update_details(company)

        company.refresh_from_db()
        self.assertEqual(company.has_extra_info, False)

        company = CompanyFactory(has_extra_info=None, name='Alpha Beta Gamer')

        update_details(company)

        company.refresh_from_db()
        self.assertEqual(company.has_extra_info, True)
        self.assertEqual(company.website, 'http://alphabetagamer.com')
        self.assertEqual(company.logo, 'https://logo.clearbit.com/alphabetagamer.com')

        company = CompanyFactory(has_extra_info=None)
        autocomplete_mock.side_effect = ClearbitError('error')

        update_details(company)

        company.refresh_from_db()

        self.assertEqual(company.has_extra_info, False)
