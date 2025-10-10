# Dockerfile para microserviço NestJS (comunicacao)
FROM node:20-alpine AS builder
WORKDIR /app
COPY ../../.. .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm install --filter ./apps/comunicacao...
RUN pnpm exec prisma generate --schema=prisma/schema.prisma
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/comunicacao/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3005
CMD ["node", "dist/main.js"]
