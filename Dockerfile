FROM node:alpine

EXPOSE 3000

WORKDIR /app

COPY *.json .

RUN npm install

COPY .  .

CMD [ "npm" , "start" ]