FROM node:12-alpine

WORKDIR /app

COPY ./package.json .

RUN yarn install --production

COPY . .

ENTRYPOINT ["node", "./src/index.js" ]
