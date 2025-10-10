
# Dockerfile para microserviço NestJS (auth)
FROM node:20-alpine AS builder
WORKDIR /app
COPY ../../.. .
RUN npm install -g pnpm && pnpm install --filter ./apps/auth...
RUN pnpm --filter ./apps/auth... build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/auth/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3002
CMD ["node", "dist/main.js"]
