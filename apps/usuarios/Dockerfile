RUN npm install -g pnpm && pnpm install --prod
# Dockerfile para microserviço NestJS (clientes)

# Dockerfile robusto para build monorepo (contexto raiz do projeto)
FROM node:20-alpine AS builder
WORKDIR /app
# Copia apenas arquivos essenciais do monorepo
COPY ../../package.json ../../pnpm-lock.yaml ../../pnpm-workspace.yaml ./
COPY ../../apps ./apps
COPY ../../prisma ./prisma
COPY ../../tsconfig.base.json ./
RUN npm install -g pnpm && pnpm install
WORKDIR /app/apps/usuarios
RUN pnpm --filter usuarios... build



FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/usuarios/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/node_modules/.prisma/client-usuarios ./node_modules/.prisma/client-usuarios
COPY --from=builder /app/apps/usuarios/package.json ./package.json
RUN npm install -g pnpm && pnpm install --prod
EXPOSE 3009
CMD ["node", "dist/main.js"]
