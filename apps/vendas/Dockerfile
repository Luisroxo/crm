# Dockerfile para microserviço NestJS (vendas)
FROM node:20-alpine AS builder
WORKDIR /app
COPY ../../.. .
WORKDIR /app/apps/vendas
RUN npm install -g pnpm && pnpm install && pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/vendas/dist ./dist
COPY --from=builder /app/apps/vendas/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/vendas/.env ./.env
EXPOSE 3002
CMD ["node", "dist/main.js"]
