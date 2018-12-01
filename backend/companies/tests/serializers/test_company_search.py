from django.test import TestCase

from companies.serializers import CompanySearchSerializer
from companies.tests.factories import CompanyFactory


class CompanySearchSerializerTest(TestCase):

    def test_serializer(self):
        company = CompanyFactory()

        serializer = CompanySearchSerializer(instance=company)

        self.assertDictEqual(serializer.data, {
            'symbol': company.symbol,
            'name': company.name
        })
