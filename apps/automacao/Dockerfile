# Dockerfile para microserviço NestJS (automacao)
FROM node:20-alpine AS builder
WORKDIR /app
COPY ../../.. .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm --filter automacao... build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/automacao/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3003
CMD ["node", "dist/main.js"]
