# Dockerfile para CRM (NestJS)

FROM node:20-alpine AS builder
WORKDIR /app
# Copia apenas arquivos de dependências para cache eficiente
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./
COPY turbo.json ./
# Instala dependências do monorepo e do app web
RUN npm install -g pnpm && pnpm install --frozen-lockfile
# Agora copia o restante do código
COPY . .
WORKDIR /app/apps/crm
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/crm/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3001
CMD ["node", "dist/main.js"]
