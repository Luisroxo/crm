# Dockerfile para microserviço NestJS (gateway)
FROM node:20-alpine AS builder
WORKDIR /app
COPY ../../.. .
RUN npm install -g pnpm
RUN pnpm install
WORKDIR /app/apps/gateway
RUN pnpm --filter gateway... build

EXPOSE 3007
CMD ["node", "dist/main.js"]
