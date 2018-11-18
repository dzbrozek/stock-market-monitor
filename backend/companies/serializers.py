from rest_framework import serializers

from companies.models import Company


class CompanyRequestSerializer(serializers.Serializer):
    company = serializers.PrimaryKeyRelatedField(queryset=Company.objects.all())


class CompanySearchSerializer(serializers.ModelSerializer):

    class Meta:
        model = Company
        fields = ('symbol', 'name')


class CompanyInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Company
        fields = ('symbol', 'name', 'logo', 'website')
