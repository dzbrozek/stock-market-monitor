#!/usr/bin/env bash

./wait-for-it.sh $POSTGRES_HOST:$POSTGRES_PORT --timeout=60

if [ $? -eq 0 ]
then
  echo "==> db is ready"
else
  echo "==> could not connect to db" >&2
  exit 1
fi

echo "==> Running migrations..."
python manage.py migrate --noinput

echo "==> Collecting statics..."
python manage.py collectstatic --noinput -v 2

echo "==> Running dev server..."
exec python -u manage.py runserver [::]:8000
