from django.test import TestCase
from rest_framework.exceptions import ErrorDetail

from companies.serializers import CompanyRequestSerializer
from companies.tests.factories import CompanyFactory


class CompanyRequestSerializerTest(TestCase):

    def test_serializer(self):
        data = {}

        serializer = CompanyRequestSerializer(data=data)
        self.assertFalse(serializer.is_valid())
        self.assertDictEqual(serializer.errors, {
            'company': [ErrorDetail(string='This field is required.', code='required')]
        })

        data = {'company': 'AB'}

        serializer = CompanyRequestSerializer(data=data)
        self.assertFalse(serializer.is_valid())
        self.assertDictEqual(serializer.errors, {
            'company': [ErrorDetail(string='Invalid pk "AB" - object does not exist.', code='does_not_exist')]
        })

        CompanyFactory(symbol='AB')

        serializer = CompanyRequestSerializer(data=data)
        self.assertTrue(serializer.is_valid())



