# Dockerfile para microserviço NestJS (auth)
FROM node:20-alpine AS builder
WORKDIR /app
COPY ../../.. .
RUN npm install -g pnpm && npm install -g @nestjs/cli
RUN pnpm install
WORKDIR /app/apps/auth
RUN pnpm --filter auth... build

EXPOSE 3002
CMD ["node", "dist/main.js"]
