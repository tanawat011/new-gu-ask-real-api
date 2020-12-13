FROM node:15-alpine

RUN apk add bash

WORKDIR /usr/app

COPY . .

RUN yarn
RUN yarn global add nodemon typescript ts-node

CMD yarn dev
EXPOSE 3000
