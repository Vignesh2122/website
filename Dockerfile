FROM node:20

WORKDIR /app

RUN npm install -g n

RUN n 20.11.1

COPY package*.json ./

RUN npm install -f

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npx", "serve", "out"]
