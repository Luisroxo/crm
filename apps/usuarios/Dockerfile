# Dockerfile para microserviço NestJS (clientes)
FROM node:20-alpine AS builder
WORKDIR /app
COPY ../../.. .
RUN npm install -g pnpm
RUN pnpm install
WORKDIR /app/apps/usuarios
RUN pnpm --filter usuarios... build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/usuarios/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3009
CMD ["node", "dist/main.js"]
