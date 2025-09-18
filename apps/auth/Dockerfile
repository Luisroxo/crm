# Dockerfile para microserviço NestJS (auth)
FROM node:20-alpine AS builder
WORKDIR /app
COPY ../../.. .
WORKDIR /app/apps/auth
RUN npm install -g pnpm && pnpm install && pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/auth/dist ./dist
COPY --from=builder /app/apps/auth/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/auth/.env ./.env
EXPOSE 3001
CMD ["node", "dist/main.js"]
