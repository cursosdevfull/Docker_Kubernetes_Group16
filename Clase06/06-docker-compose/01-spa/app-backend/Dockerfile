FROM node:20-alpine

WORKDIR /app

RUN apk add curl

COPY package*.json ./

RUN npm install

COPY . .

USER node

CMD ["npm", "start"]