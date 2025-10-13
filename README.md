# Comandos Docker Compose (Desenvolvimento)

Para orquestrar todos os microserviços e bancos em ambiente de desenvolvimento:

```sh
# Build e subida de todos os serviços
docker-compose -f infra/docker/docker-compose.dev.yml up --build

# Subir apenas um serviço específico (exemplo: usuarios)
docker-compose -f infra/docker/docker-compose.dev.yml up --build usuarios

# Parar todos os serviços
docker-compose -f infra/docker/docker-compose.dev.yml down

# Ver logs de um serviço
docker-compose -f infra/docker/docker-compose.dev.yml logs -f usuarios
```

> Execute sempre os comandos a partir da raiz do projeto.
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

## Documentação principal
- `docs/roadmap-tecnico.md` — Roadmap e status do projeto
- `docs/plano-migracao-microservicos.md` — Checklist e migração
- `docs/diagrama-arquitetura.md` — Diagrama da arquitetura
- `docs/kubernetes.md` — Deploy e infraestrutura

> A documentação foi revisada e está centralizada nos arquivos essenciais acima.

## Build e Deploy
- Para build de produção:
	```
	pnpm -w build
	```
- Para subir infraestrutura local:
	```
	docker compose -f infra/docker/docker-compose.dev.yml up -d
	```

## Build Docker Compose (multi-serviços)

- Para buildar e subir todos os microserviços e bancos:
  ```sh
  docker compose -f infra/docker/docker-compose.dev.yml up --build --remove-orphans
  ```
- Para parar e remover todos os containers:
  ```sh
  docker compose -f infra/docker/docker-compose.dev.yml down
  ```
- Para logs de todos os serviços:
  ```sh
  docker compose -f infra/docker/docker-compose.dev.yml logs -f
  ```

### Variáveis de ambiente (.env)
- Cada microserviço possui um arquivo `.env.example` com o modelo das variáveis necessárias.
- Copie e renomeie para `.env` antes de rodar localmente ou em produção.
- O Dockerfile não copia `.env` automaticamente — é responsabilidade do dev/devops garantir o arquivo correto no ambiente.

## Estrutura
- apps/web — Next.js
- apps/api — NestJS
- prisma/schema.prisma — modelos
- docs — arquitetura, API, LGPD, roadmap, migração
- apps/web — Next.js
- apps/api — NestJS
- prisma/schema.prisma — modelos
- docs — arquitetura, ADRs, API, LGPD
>>>>>>> 660f80d (chore: bootstrap monorepo — Next.js + NestJS + Prisma)
