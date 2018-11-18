import requests


class ClearbitError(Exception):

    def __init__(self, error):
        self.error = error

    def __str__(self):
        return self.error


class ClearbitAPI:
    API_BASE_URL = 'https://autocomplete.clearbit.com/v1/'

    def __init__(self, timeout=None):
        self.timeout = timeout

    def autocomplete(self, query):
        endpoint = 'companies/suggest'
        method = 'GET'

        params = {
            'query': query,
        }

        return self.request(endpoint, method, params)

    def request(self, endpoint, method, params):
        response = requests.request(method,
                                    self.API_BASE_URL + endpoint,
                                    timeout=self.timeout,
                                    params=params)
        data = response.json()

        if 200 <= response.status_code < 300:
            return data

        raise ClearbitError(data.get('message', ''))
