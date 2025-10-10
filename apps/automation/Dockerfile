# Dockerfile para Automation (NestJS)
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
COPY turbo.json ./
RUN npm install -g pnpm && pnpm install
WORKDIR /app/apps/automation
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/automation/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3003
CMD ["node", "dist/main.js"]
