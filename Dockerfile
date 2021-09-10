# syntax=docker/dockerfile:1

FROM ubuntu:20.04
ENV LANG en_US.utf8
ENV PIPELINE_LOG_LEVEL DEBUG
ENV PIPELINE_AUTHENTICATION ''

RUN DEBIAN_FRONTEND="noninteractive" apt-get update && DEBIAN_FRONTEND="noninteractive" apt-get install -y \
    nodejs \
    npm \
    git \
    ssh \
    && rm -rf /var/lib/apt/lists/*

COPY ./dist /app
CMD node /app/main.js --wait matrix://
