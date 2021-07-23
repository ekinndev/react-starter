FROM node:alpine

WORKDIR /app

#RUN apk add python make g++

COPY package.json package-lock.json ./

RUN npm install

COPY . .

VOLUME [ "/app/src" ]
VOLUME [ "/app/public" ]

EXPOSE 3001

CMD ["npm", "start"]