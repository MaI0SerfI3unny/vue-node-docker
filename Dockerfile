FROM node:17.5.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 5555
CMD [ "node", "index.js" ]
