# Dockerfile para microserviço NestJS (comunicacao)
FROM node:20-alpine AS builder
WORKDIR /app
COPY ../../.. .
WORKDIR /app/apps/comunicacao
RUN npm install -g pnpm && pnpm install && pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/comunicacao/dist ./dist
COPY --from=builder /app/apps/comunicacao/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/comunicacao/.env ./.env
EXPOSE 3004
CMD ["node", "dist/main.js"]
