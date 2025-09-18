# Dockerfile para microserviço NestJS (tarefas)
FROM node:20-alpine AS builder
WORKDIR /app
COPY ../../.. .
WORKDIR /app/apps/tarefas
RUN npm install -g pnpm && pnpm install && pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/tarefas/dist ./dist
COPY --from=builder /app/apps/tarefas/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/tarefas/.env ./.env
EXPOSE 3005
CMD ["node", "dist/main.js"]
