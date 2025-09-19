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



## Segurança dos Tokens JWT e APIs

- **IMPORTANTE:**
	- Defina a variável de ambiente `JWT_SECRET` em todos os serviços que geram ou validam JWT (ex: auth, clientes). Nunca deixe segredos hardcoded no código.
	- Use HTTPS em produção (via proxy reverso, load balancer ou configuração cloud). Nunca exponha APIs sensíveis em HTTP puro.
	- Todos os serviços já possuem:
		- Validação obrigatória de `JWT_SECRET` no bootstrap
		- Rate limiting global (protege endpoints como `/auth/login` contra brute force)
		- CORS restritivo e headers de segurança (helmet)
	- Exemplo de uso no Docker Compose ou ambiente cloud:
		```env
		JWT_SECRET=um_segredo_forte_e_unico
		```
- Veja os arquivos `.env.example` de cada serviço para referência.

Infra local
- `docker compose -f infra/docker/docker-compose.dev.yml up -d`

Estrutura
- apps/web — Next.js
- apps/api — NestJS
- prisma/schema.prisma — modelos
- docs — arquitetura, ADRs, API, LGPD
