FROM node:12.13-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

CMD ["yarn", "start"]
