FROM node:10-alpine

RUN apk add bash nano curl php php-json

RUN mkdir /app

WORKDIR /app

COPY search_node/. .

RUN chmod +x /app/install.sh

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  /app/install.sh &&\
  apk del native-deps

COPY apikeys.json apikeys.json
COPY config.json config.json
COPY mappings.json mappings.json

COPY search_activate.sh search_activate.sh
COPY search_initialize.sh search_initialize.sh

RUN chmod +x /app/search_activate.sh
RUN chmod +x /app/search_initialize.sh
