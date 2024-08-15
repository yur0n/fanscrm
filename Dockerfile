FROM node:20.10.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x ./wait-for-it.sh

RUN npm run build

EXPOSE 2086

CMD ["npm", "run", "start:prod"]