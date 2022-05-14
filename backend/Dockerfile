FROM node:14-alpine

ENV DB_USER=root
ENV DB_PASSWORD=password
ENV DB_HOST=localhost
ENV DB_PORT=3306
ENV JWT_SECRET=abobrinha

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "debug" ]