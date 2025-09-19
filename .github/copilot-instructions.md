# Copilot Instructions – visao360-plus CRM Monorepo

> Propósito: Orientar assistentes de IA (Copilot / ChatGPT / agentes) a gerar, alterar e revisar código de forma alinhada aos padrões atuais do projeto (estado real, não idealizado). Mantenha este arquivo curto, preciso e atualizado.

## 1. Stack & Contexto Atual
- Monorepo (pnpm + Turborepo)
- Backend principal: NestJS (apps/api) + módulos futuros (ex: clientes)
- Frontend: Next.js 14 (apps/web) + TailwindCSS
- ORM: Prisma + PostgreSQL (arquivo: `prisma/schema.prisma`)
- Infra local: Docker Compose (`infra/docker/docker-compose.dev.yml`)
- CI: GitHub Actions (`.github/workflows/ci.yml`) executa install, lint, test, build
- Linguagem: TypeScript strict (tsconfig.base)

## 2. Estrutura de Pastas (resumida)
```
apps/
  api/        # NestJS app root (AppModule)
  clientes/   # Serviço clientes (WIP) – precisa integrar Prisma
  web/        # Next.js
prisma/       # Schema e migrations
infra/        # Docker / infraestrutura local
.docs/        # (não existe) – NÃO criar pastas aleatórias; usar `docs/`
docs/         # Arquitetura, roadmap, LGPD, API
```
Nunca mover pastas raiz sem discussão (abrir PR explicando impacto).

## 3. Fluxo de Trabalho Git
- Base principal: `main` (estável) – desenvolvimento ocorre em `dev` ou feature branches
- Estratégia: rebase antes de push (histórico linear)
- Pull Requests: usar template `.github/pull_request_template.md`
- Mensagens commit: formato livre porém claro; prefira escopos: `feat(api): ...`, `fix(web): ...`
- Conflitos: resolver localmente e garantir build + lint antes de abrir PR

## 4. Padrões de Código
- TypeScript: evitar `any`; aplicar DTOs / tipos explícitos
- NestJS: cada domínio → módulo próprio (Module, Controller, Service, DTO). Não implemente lógica de dados direto no controller
- Prisma: gerar cliente antes de dev (`pnpm predev` já chama `prisma generate`)
- Erros temporários: substituir `throw new Error('Não implementado...')` por implementação real + testes
- Nomeclatura DB: tabelas via `@@map` em snake_case; modelos Prisma em PascalCase
- Evite abstrações prematuras (ex: não criar repository pattern sem necessidade)

## 5. Testes
- Estado atual: testes mínimos (spec inicial Nest). Ao adicionar lógica → criar testes unit/integration correspondentes
- Nome de arquivo: `*.spec.ts`
- Escopo rápido: serviços isolados; controllers com mocks

## 6. CI/CD & Qualidade
- Pipeline falha se lint ou testes falham
- Não adicionar passos pesados sem cache (usar Turborepo + cache Actions)
- Adapte novos jobs em outro arquivo workflow se complexo

## 7. Segurança / Configuração
- Variáveis sensíveis (ex: `DATABASE_URL`, `JWT_SECRET`) devem vir de `.env.local` ou secrets no CI – nunca commitar valores reais
- Não expor segredos em logs de PR
- JWT: ainda não implementado no código; se gerar módulo de auth, validar presença de `JWT_SECRET` no bootstrap

## 8. Como Pedir Ajuda à IA
Faça pedidos específicos. Bons exemplos:
- "Gerar serviço NestJS para CRUD de Cliente usando Prisma (modelo Cliente no schema). Incluir DTOs (create/update) e testes unitários básicos."
- "Escrever migration Prisma para adicionar campo `status` em `Lead` com enum {ATIVO, INATIVO}. Atualizar modelo + regenerate."

Evitar pedidos vagos como: "melhora o código".

Formato esperado em respostas da IA:
1. Lista objetiva de mudanças
2. Patch ou arquivos novos (sem reformatação massiva)
3. Se adicionar dependência → justificar e atualizar root `package.json` (ou local) + lock
4. Incluir próximos passos curtos

## 9. Limites para IA
- NÃO: refatorações gigantes de múltiplos domínios num único PR
- NÃO: alterar schema Prisma sem mencionar impacto em migration e dados
- NÃO: criar novas stacks (ex: adicionar Kafka) sem item no roadmap
- NÃO: gerar código de terceiros verbatim (risco copyright)

## 10. Roadmap (alto nível – resumo)
Ver `docs/roadmap-tecnico.md`. Se ausente ou desatualizado: listar lacunas e sugerir atualização antes de grandes features.

## 11. Qualidade Mínima em Novo Código
Checklist rápido (auto-validar antes de abrir PR):
- [ ] Tipos corretos sem `any` supérfluo
- [ ] DTO com validações (class-validator) quando input externo
- [ ] Erros tratados (não engolir exceptions)
- [ ] Lint passa localmente (`pnpm lint`)
- [ ] Testes novos/atualizados (quando aplicável)

## 12. Extensões Futuras (Sugestões)
- Adicionar módulo Auth + RBAC
- Observability (OpenTelemetry + exporter)
- Testes E2E com Prisma test db isolado
- Scripts de seed controlados (`prisma/seed.ts`)

---
Atualize este arquivo quando: nova política de branches, novo módulo cross-cutting, mudança de stack.
