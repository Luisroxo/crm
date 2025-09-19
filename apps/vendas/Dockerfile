# Dockerfile para microserviço NestJS (vendas)
FROM node:20-alpine AS builder
WORKDIR /app
COPY ../../.. .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm --filter vendas... build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/vendas/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3010
CMD ["node", "dist/main.js"]
