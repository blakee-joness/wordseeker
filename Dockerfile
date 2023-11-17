FROM node:18-bullseye-slim as build

WORKDIR /app
COPY .. .
WORKDIR /app/wordSeeker
RUN npm ci
RUN npm run lint

RUN npm run build
