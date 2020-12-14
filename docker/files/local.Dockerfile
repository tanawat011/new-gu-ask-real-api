FROM node:15-alpine

RUN apk add bash

WORKDIR /usr/app

COPY . .

RUN yarn

CMD yarn dev
EXPOSE 3000
