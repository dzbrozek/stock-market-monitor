# Generated by Django 2.0.9 on 2018-11-28 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('companies', '0002_auto_20181118_1416'),
    ]

    operations = [
        migrations.CreateModel(
            name='CompanyNameSuffix',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('suffix', models.CharField(max_length=30)),
            ],
        ),
    ]
