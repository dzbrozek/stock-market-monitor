from django.test import TestCase

from companies.serializers import CompanyInfoSerializer
from companies.tests.factories import CompanyFactory


class CompanyInfoSerializerTest(TestCase):

    def test_serializer(self):
        company = CompanyFactory()

        serializer = CompanyInfoSerializer(instance=company)
        self.assertDictEqual(serializer.data, {
            'symbol': company.symbol,
            'name': company.name,
            'logo': company.logo,
            'website': company.website
        })
