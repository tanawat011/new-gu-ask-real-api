FROM node:15-alpine

COPY . .

RUN yarn
RUN yarn global add nodemon typescript ts-node

CMD yarn dev
EXPOSE 3000