FROM node:8.12.0

RUN mkdir /app

WORKDIR /app

ADD . ./

RUN apt-get update -y

RUN npm install

EXPOSE 3000