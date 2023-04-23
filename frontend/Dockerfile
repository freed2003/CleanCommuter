FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . ./

RUN npm start