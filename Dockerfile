FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install && npm update

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
