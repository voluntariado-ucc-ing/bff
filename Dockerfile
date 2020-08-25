FROM node:10.16.3 as build-stage

ENV VA_IP=178.18.0.8 \
    VA_PORT=8080 \
    DA_IP=178.18.0.7 \
    DA_PORT=8080 

RUN mkdir /app

WORKDIR  /app

COPY ./ /app/

RUN npm install

EXPOSE 3000

CMD npm start

