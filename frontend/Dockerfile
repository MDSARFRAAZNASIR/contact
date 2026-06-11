FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG RAECT_API_URL
ENV RAECT_API_URL: $REACT_API_URL

EXPOSE 3001

CMD ["npm", "start"]