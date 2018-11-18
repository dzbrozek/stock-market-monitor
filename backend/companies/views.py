from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework.views import APIView

from companies.serializers import CompanySearchSerializer, CompanyRequestSerializer, CompanyInfoSerializer


class CompanySearchView(APIView):

    def get(self, request):
        from companies.services.views.company_search import company_search

        query = request.GET.get('query')
        if not query:
            raise ValidationError('Missing query parameter')

        companies = company_search(query)

        return Response(CompanySearchSerializer(companies, many=True).data)


class CompanyInfoView(APIView):

    def get(self, request):
        from companies.services.views.company_info import company_info

        serializer = CompanyRequestSerializer(data=request.GET)
        serializer.is_valid(raise_exception=True)

        company = company_info(serializer.validated_data['company'])

        return Response(CompanyInfoSerializer(company).data)


class CompanyStockValuation(APIView):

    def get(self, request):
        from companies.services.views.company_stock_valuation import company_stock_valuation

        serializer = CompanyRequestSerializer(data=request.GET)
        serializer.is_valid(raise_exception=True)

        data = company_stock_valuation(serializer.validated_data['company'])

        return Response(data)


class CompanyCurrentPrice(APIView):

    def get(self, request):
        from companies.services.views.company_current_price import company_current_price

        serializer = CompanyRequestSerializer(data=request.GET)
        serializer.is_valid(raise_exception=True)

        data = company_current_price(serializer.validated_data['company'])

        return Response(data)


