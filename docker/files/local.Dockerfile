FROM node:15-alpine

COPY . .

RUN yarn

CMD yarn dev
EXPOSE 3000
