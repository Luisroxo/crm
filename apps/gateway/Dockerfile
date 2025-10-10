# Dockerfile para microserviço NestJS (gateway)
FROM node:20-alpine AS builder
WORKDIR /app
COPY ../../.. .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm --filter gateway... build

FROM node:20-alpine AS runner
WORKDIR /app
# COPY --from=builder /app/apps/gateway/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3007
CMD ["node", "dist/main.js"]
