# Dockerfile para microserviço NestJS (automacao)
FROM node:20-alpine AS builder
WORKDIR /app
COPY ../../.. .
WORKDIR /app/apps/automacao
RUN npm install -g pnpm && pnpm install && pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/automacao/dist ./dist
COPY --from=builder /app/apps/automacao/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/automacao/.env ./.env
EXPOSE 3006
CMD ["node", "dist/main.js"]
