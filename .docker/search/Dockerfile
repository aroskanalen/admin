FROM node:10-alpine

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
