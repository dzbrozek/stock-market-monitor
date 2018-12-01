import responses

from unittest import TestCase, mock

from companies.services.clearbit.clearbit import ClearbitAPI, ClearbitError


class ClearbitAPITest(TestCase):

    def setUp(self):
        self.payload = [
            {
                "name": "Apple",
                "domain": "apple.com",
                "logo": "https://logo.clearbit.com/apple.com"
            }, {
                "name": "AppleInsider",
                "domain": "appleinsider.com",
                "logo": "https://logo.clearbit.com/appleinsider.com"
            }
        ]

    @mock.patch('companies.services.clearbit.clearbit.ClearbitAPI.request')
    def test_autocomplete(self, request_mock):
        query = 'Apple'
        request_mock.return_value = self.payload

        api = ClearbitAPI()

        response = api.autocomplete(query)
        self.assertEqual(response, request_mock.return_value)
        request_mock.assert_called_once_with('companies/suggest', 'GET', dict(query=query))

    @responses.activate
    def test_request(self):
        api = ClearbitAPI()

        responses.add(responses.GET, 'https://autocomplete.clearbit.com/v1/test',
                      json=self.payload, status=200)
        responses.add(responses.GET, 'https://autocomplete.clearbit.com/v1/error',
                      json={'message': 'Invalid params.'}, status=412)

        response = api.request('test', 'GET')
        self.assertEqual(response, self.payload)

        with self.assertRaises(ClearbitError) as e:
            api.request('error', 'GET')
        self.assertEqual(e.exception.error, 'Invalid params.')


