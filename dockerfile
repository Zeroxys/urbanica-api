FROM node:6.11.3
EXPOSE 3000

WORKDIR /app 

ADD package.json /app/
RUN npm install

ADD . /app

CMD ["npm", "start"]