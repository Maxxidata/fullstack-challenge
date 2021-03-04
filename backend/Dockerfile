FROM node:12.13-alpine

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE ${PORT}

CMD npm run dev