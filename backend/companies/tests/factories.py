import datetime

import factory.fuzzy
from companies.models import Company, CompanyNameSuffix


class CompanyFactory(factory.django.DjangoModelFactory):
    symbol = factory.Sequence(lambda n: str(n))
    name = factory.Faker('word')
    market_open = factory.fuzzy.FuzzyChoice(choices=[datetime.time(1), datetime.time(6), datetime.time(4, 30)])
    market_close = factory.fuzzy.FuzzyChoice(choices=[datetime.time(16), datetime.time(20), datetime.time(22, 30)])
    timezone = factory.fuzzy.FuzzyChoice(choices=[1.0, 2.0, -5.0, 6.5, 0, 3.0])

    has_extra_info = factory.fuzzy.FuzzyChoice(choices=[True, False])
    logo = factory.Faker('url')
    website = factory.Faker('url')

    class Meta:
        model = Company
        django_get_or_create = ('symbol', )


class CompanyNameSuffixFactory(factory.django.DjangoModelFactory):
    suffix = factory.Faker('word')

    class Meta:
        model = CompanyNameSuffix
