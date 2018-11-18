from django.db import models


class Company(models.Model):
    symbol = models.CharField(max_length=20, primary_key=True)
    name = models.CharField(max_length=255)
    market_open = models.TimeField()
    market_close = models.TimeField()
    timezone = models.FloatField()

    has_extra_info = models.NullBooleanField()
    logo = models.URLField(blank=True)
    website = models.URLField(blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Companies'
