from django.contrib import admin

from companies.models import Company, CompanyNameSuffix


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('symbol', 'name', 'market_open', 'market_close', 'timezone')
    search_fields = ('symbol', 'name')


@admin.register(CompanyNameSuffix)
class CompanyNameSuffixAdmin(admin.ModelAdmin):
    list_display = ('id', 'suffix')
    search_fields = ('id', 'suffix')
