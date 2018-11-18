FROM python:3.6.6

WORKDIR /app

ADD . ./

RUN pip install -r requirements.txt

RUN apt-get update && apt-get install -y \
    vim \
    curl \
    gcc \
    gettext \
    libav-tools \
    postgresql-client libpq-dev \
    --no-install-recommends

EXPOSE 8000

CMD ["/app/start.sh"]
