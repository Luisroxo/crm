# Módulo Tarefas

Este microserviço é responsável pelo gerenciamento de tarefas do CRM.

## Setup e Build

```sh
pnpm install
pnpm build
```

## Docker

Para buildar a imagem Docker:
```sh
docker build -f apps/tarefas/Dockerfile -t tarefas .
```

No Docker Compose, o contexto deve ser a raiz do monorepo:
```yaml
  tarefas:
    build:
      context: ../../
      dockerfile: apps/tarefas/Dockerfile
```

## Variáveis de Ambiente
- `DATABASE_URL_TAREFAS`: string de conexão do banco Postgres

## Prisma
- Schema: `prisma/schema.prisma`
- Gere o client com:
```sh
pnpm exec prisma generate --schema=prisma/schema.prisma
```

## Testes
```sh
pnpm exec jest --config=jest.config.js --runInBand --detectOpenHandles --verbose
```
