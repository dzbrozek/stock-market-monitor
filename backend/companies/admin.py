from django.contrib import admin

from companies.models import Company


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('symbol', 'name', 'market_open', 'market_close', 'timezone')
    search_fields = ('symbol', 'name')

