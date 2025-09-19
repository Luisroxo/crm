# Arquitetura de Isolamento — visao360-plus CRM

## Diagrama de Arquitetura (resumido)

```
[Usuário/API Client]
      |
   [Gateway]
      |
  +---+---+---+---+---+---+---+---+---+---+
  |api|auth|automacao|clientes|comunicacao|empresas|tarefas|usuarios|vendas|
  +---+---+---+---+---+---+---+---+---+---+
      |         |         |         |         |
   [Postgres] [MongoDB] [Redis] ... (um por serviço)
```

## Tabela de Variáveis de Ambiente por Serviço

| Serviço     | Variável de Banco           | Exemplo de Porta | Outras Variáveis Importantes |
|-------------|-----------------------------|------------------|-----------------------------|
| api         | DATABASE_URL_API            | 3001             | ...                         |
| auth        | DATABASE_URL_AUTH           | 3002             | ...                         |
| automacao   | DATABASE_URL_AUTOMACAO      | 3003             | ...                         |
| clientes    | DATABASE_URL_CLIENTES       | 3004             | ...                         |
| comunicacao | DATABASE_URL_COMUNICACAO    | 3005             | ...                         |
| empresas    | DATABASE_URL_EMPRESAS       | 3006             | ...                         |
| gateway     | DATABASE_URL_GATEWAY        | 3000             | ...                         |
| tarefas     | DATABASE_URL_TAREFAS        | 3007             | ...                         |
| usuarios    | DATABASE_URL_USUARIOS       | 3008             | ...                         |
| vendas      | DATABASE_URL_VENDAS         | 3009             | ...                         |

## Passo a Passo de Build, Test e Deploy

1. **Build local:**
   ```bash
   pnpm install
   pnpm -w build
   ```
2. **Testes:**
   ```bash
   pnpm test
   # ou para serviço específico:
   pnpm --filter <serviço> test
   ```
3. **Docker Compose:**
   ```bash
   docker-compose -f infra/docker/docker-compose.dev.yml up --build
   ```
4. **Deploy (CI/CD):**
   - O push de imagens Docker é feito automaticamente via GitHub Actions na branch main.
   - Consulte `docs/ci-cd.md` para detalhes do pipeline.

---
Dúvidas? Consulte os READMEs dos serviços ou abra uma issue.
