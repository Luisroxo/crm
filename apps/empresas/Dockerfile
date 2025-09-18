# Dockerfile para microserviço NestJS (empresas)
FROM node:20-alpine AS builder
WORKDIR /app
COPY ../../.. .
WORKDIR /app/apps/empresas
RUN npm install -g pnpm && pnpm install && pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/empresas/dist ./dist
COPY --from=builder /app/apps/empresas/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/empresas/.env ./.env
EXPOSE 3003
CMD ["node", "dist/main.js"]
