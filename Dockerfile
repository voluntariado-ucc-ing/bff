FROM node:10.16.3 as build-stage

ENV VA_IP=172.17.0.3 \
    VA_PORT=8080 \
    DA_IP=172.17.0.5 \
    DA_PORT=4040 

RUN mkdir /app

WORKDIR  /app

COPY ./ /app/

RUN npm install

EXPOSE 6969

CMD npm start

