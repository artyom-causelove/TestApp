FROM ubuntu:latest

ENV DEBIAN_FRONTEND=noninteractive

EXPOSE 3000

WORKDIR /

RUN apt-get update && apt-get install -yq apt-utils

RUN apt-get update && apt-get install -yq \
    nodejs \
    npm \
    git

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD git clone https://github.com/artyom-causelove/TestApp && \
    cd /TestApp && \
    npm install && \
    npm run build && \
    npm run start && \
    bash