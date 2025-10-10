# Dockerfile para BPMS (NestJS)
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
COPY turbo.json ./
RUN npm install -g pnpm && pnpm install
WORKDIR /app/apps/bpms
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/bpms/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3002
CMD ["node", "dist/main.js"]
