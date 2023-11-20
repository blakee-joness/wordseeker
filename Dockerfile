FROM mcr.microsoft.com/devcontainers/typescript-node:18-bullseye as build

WORKDIR /app
COPY .. .
WORKDIR /app/wordSeeker
RUN npm ci
