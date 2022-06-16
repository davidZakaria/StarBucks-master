<<<<<<< HEAD
FROM node:16.15.0-alpine3.15

RUN addgroup app && adduser -S -G app app
USER app

WORKDIR /app
COPY --chown=app:app package*.json ./
RUN npm install
COPY --chown=app:app  . . 

EXPOSE 3000

CMD ["npm", "start"]
=======
FROM node:latest AS base
WORKDIR /app
COPY package.json .
RUN npm install
COPY . . 
EXPOSE 8080
CMD [ "node", "index.js" ]
>>>>>>> 68b76576aec65f7bbd0e6f1e4b93245222299a85
