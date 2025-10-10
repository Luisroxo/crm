# Dockerfile para microserviço NestJS (tarefas)
FROM node:20-alpine AS builder
WORKDIR /app
COPY ../../.. .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
# COPY --from=builder /app/apps/tarefas/dist ./dist
# COPY --from=builder /app/apps/tarefas/dist ./dist
EXPOSE 3008
CMD ["node", "dist/main.js"]
