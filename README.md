# visao360-plus — Monorepo (MVP)

Monorepo do CRM (MVP) com:
- Frontend: Next.js 14 (TS) + Tailwind
- Backend: NestJS 10 (TS)
- ORM: Prisma + PostgreSQL
- Infra dev: Docker Compose (Postgres, Redis, Mailpit, MinIO)
- CI: GitHub Actions com Turborepo

Comandos principais
- `pnpm install` — instala dependências
- `pnpm dev` — executa web e api em paralelo
- `pnpm -w build` — build dos pacotes/apps

Infra local
- `docker compose -f infra/docker/docker-compose.dev.yml up -d`

Estrutura
- apps/web — Next.js
- apps/api — NestJS
- prisma/schema.prisma — modelos
- docs — arquitetura, ADRs, API, LGPD
