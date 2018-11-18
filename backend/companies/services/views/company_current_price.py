import datetime
import logging
import math

import pytz
from alpha_vantage.timeseries import TimeSeries
from django.conf import settings
from django.utils.timezone import now as utc_now

logger = logging.getLogger(__name__)


def timezone_offset(timezone):
    minutes, hours = math.modf(timezone)

    if minutes == 5:
        return dict(hours=hours, minutes=30)
    return dict(hours=hours, minutes=minutes)


def is_market_open(company):
    local_now = utc_now() - datetime.timedelta(**timezone_offset(company.timezone))
    if local_now.isoweekday() >= 6:
        return False

    return company.market_open <= local_now.time() <= company.market_close


def company_current_price(company):
    if not is_market_open(company):
        return dict(is_open=False, price=None)

    ts = TimeSeries(key=settings.ALPHA_VANTAGE_API_KEY)

    time_series, meta_data = ts.get_daily(company.symbol)

    try:
        local_tz = pytz.timezone(meta_data['5. Time Zone'])
        date = utc_now().astimezone(local_tz).date()

        return dict(is_open=True, price=time_series[date.isoformat()]['4. close'])
    except KeyError as e:
        logger.exception(e)

    return dict(is_open=True, price=None)
