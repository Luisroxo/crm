# Dockerfile para Frontend (Next.js)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./
COPY turbo.json ./
COPY apps/frontend/package.json ./apps/frontend/package.json
RUN npm install -g pnpm && pnpm install --frozen-lockfile
RUN pnpm install --filter web... --frozen-lockfile
WORKDIR /app/apps/frontend
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app/apps/frontend
ENV NODE_ENV=production
COPY --from=builder /app/apps/frontend/.next ./.next
COPY --from=builder /app/apps/frontend/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npx", "next", "start"]
