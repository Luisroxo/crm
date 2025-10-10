# Dockerfile para microserviço NestJS (clientes)

FROM node:20-alpine AS builder
WORKDIR /app
# Copia o monorepo inteiro para dentro do container
COPY ../../.. .
# Instala pnpm globalmente
RUN npm install -g pnpm && npm install -g @nestjs/cli
# Instala dependências na raiz do monorepo
RUN pnpm install
# Build apenas do serviço clientes
WORKDIR /app/apps/clientes
RUN pnpm build
RUN ls -l /app/apps/clientes

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/clientes/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3002
CMD ["node", "dist/main.js"]
