# Generated by Django 2.0.9 on 2018-11-18 13:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('symbol', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('market_open', models.TimeField()),
                ('market_close', models.TimeField()),
                ('timezone', models.SmallIntegerField()),
                ('has_extra_info', models.NullBooleanField()),
                ('logo', models.URLField(blank=True)),
                ('website', models.URLField(blank=True)),
            ],
        ),
    ]
