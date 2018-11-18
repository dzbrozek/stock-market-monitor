from django.urls import path

from .views import CompanySearchView, CompanyInfoView, CompanyStockValuation, CompanyCurrentPrice

urlpatterns = [
    path('search/', CompanySearchView.as_view(), name='company-search'),
    path('stock/valuation/', CompanyStockValuation.as_view(), name='company-stock-valuation'),
    path('current/price/', CompanyCurrentPrice.as_view(), name='company-current-price'),
    path('info/', CompanyInfoView.as_view(), name='company-info')
]
