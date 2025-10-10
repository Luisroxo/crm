# Dockerfile para microserviço NestJS (vendas)
FROM node:20-alpine AS builder
WORKDIR /repo
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm install --filter ./apps/vendas...
WORKDIR /repo/apps/vendas
RUN pnpm exec prisma generate --schema=prisma/schema.prisma
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /repo/apps/vendas/dist ./dist
COPY --from=builder /repo/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/main.js"]
