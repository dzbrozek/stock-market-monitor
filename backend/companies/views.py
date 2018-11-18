from rest_framework.response import Response
from rest_framework.views import APIView


class CompanySearchView(APIView):

    def get(self, request):
        data = [
            {
                'symbol': 'BA',
                'name': 'The Boeing Company'
            }, {
                'symbol': 'BABA',
                'name': 'Alibaba Group Holding Limited'
            }, {
                'symbol': 'BAC',
                'name': 'Bank of America Corporation'
            }
        ]

        return Response(data)


class CompanyInfoView(APIView):

    def get(self, request):
        data = {
            'symbol': 'BA',
            'name': 'The Boeing Company',
            'website': 'https://www.boeing.com/',
            'logo': 'https://media.glassdoor.com/sql/102/boeing-squarelogo.png'
        }

        return Response(data)


class CompanyStockValuation(APIView):

    def get(self, request):
        data = {
            'open': '107.0800',
            'high': '108.8800',
            'low': '106.8000',
            'price': '108.2900',
            'volume': 27412598
        }

        return Response(data)


class CompanyCurrentPrice(APIView):

    def get(self, request):
        data = {
            'is_open': True,
            'price': '108.2900'
        }

        return Response(data)
