# Dockerfile para microserviço API (NestJS)
FROM node:20-alpine AS builder
WORKDIR /app
COPY ../../.. .
RUN npm install -g pnpm && npm install -g @nestjs/cli
RUN pnpm install
WORKDIR /app/apps/api
RUN pnpm --filter api... build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3001
CMD ["node", "dist/main.js"]
