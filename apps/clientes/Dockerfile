# Dockerfile para microserviço NestJS (clientes)
FROM node:20-alpine AS builder
WORKDIR /app
COPY ../../.. .
WORKDIR /app/apps/clientes
RUN npm install -g pnpm && pnpm install && pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/clientes/dist ./dist
COPY --from=builder /app/apps/clientes/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/clientes/.env ./.env
EXPOSE 3002
CMD ["node", "dist/main.js"]
