import datetime
from unittest import mock

from django.test import TestCase
from freezegun import freeze_time

from companies.services.views.company_current_price import timezone_offset, is_market_open, company_current_price
from companies.tests.factories import CompanyFactory


class CompanyCurrentPriceTest(TestCase):

    def test_timezone_offset(self):
        self.assertEqual(timezone_offset(3.0), dict(hours=3, minutes=0))

        self.assertEqual(timezone_offset(0), dict(hours=0, minutes=0))

        self.assertEqual(timezone_offset(-4.5), dict(hours=-4, minutes=-30))

        self.assertEqual(timezone_offset(6.5), dict(hours=6, minutes=30))

    @mock.patch('companies.services.views.company_current_price.timezone_offset')
    def test_is_market_open(self, timezone_offset_mock):
        timezone_offset_mock.return_value = dict(hours=-5, minutes=0)

        company = CompanyFactory(market_open=datetime.time(9, 30), market_close=datetime.time(16))

        with freeze_time("2018-12-2 18:00:00"):
            self.assertFalse(is_market_open(company))

        with freeze_time("2018-12-3 14:30:00"):
            self.assertTrue(is_market_open(company))

        with freeze_time("2018-12-3 18:00:00"):
            self.assertTrue(is_market_open(company))

        with freeze_time("2018-12-3 21:00:00"):
            self.assertTrue(is_market_open(company))

        with freeze_time("2018-12-3 21:01:00"):
            self.assertFalse(is_market_open(company))

    @freeze_time("2018-12-3 1:30:00")
    @mock.patch('companies.services.views.company_current_price.is_market_open')
    @mock.patch('companies.services.views.company_current_price.TimeSeries.get_daily')
    def test_company_current_price(self, get_daily_mock, is_market_open_mock):
        is_market_open_mock.return_value = False
        time_series = {
            "2018-11-30": {
                "1. open": "110.7000",
                "2. high": "110.9700",
                "3. low": "109.3600",
                "4. close": "110.8900",
                "5. volume": "33641467"
            }
        }
        meta_data = {
            "1. Information": "Daily Prices (open, high, low, close) and Volumes",
            "2. Symbol": "MSFT",
            "3. Last Refreshed": "2018-11-30",
            "4. Output Size": "Compact",
            "5. Time Zone": "US/Eastern"
        }
        get_daily_mock.return_value = time_series, meta_data

        company = CompanyFactory()

        self.assertDictEqual(company_current_price(company), dict(is_open=False, price=None))

        is_market_open_mock.return_value = True

        self.assertDictEqual(company_current_price(company), dict(is_open=True, price=None))

        time_series["2018-12-02"] = {
            "1. open": "107.8900",
            "2. high": "111.3300",
            "3. low": "107.8600",
            "4. close": "111.1200",
            "5. volume": "46788461"
        }

        self.assertDictEqual(company_current_price(company), dict(is_open=True, price='111.1200'))
