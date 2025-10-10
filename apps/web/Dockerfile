
# Dockerfile para Web (Next.js)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./
COPY turbo.json ./
COPY apps/web/package.json ./apps/web/package.json
RUN npm install -g pnpm && pnpm install --frozen-lockfile && pnpm install --filter web... --frozen-lockfile
COPY . .
WORKDIR /app/apps/web
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app/apps/web
ENV NODE_ENV=production
COPY --from=builder /app/apps/web/.next ./.next
COPY --from=builder /app/apps/web/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npx", "next", "start"]
