# Roadmap Técnico – visao360-plus CRM

## Concluído
- Estrutura monorepo padronizada (pnpm + Turborepo)
- Build Docker funcional para todos os serviços (NestJS)
- Frontend Next.js 14 buildando sem erros
- Integração Prisma e geração de client por serviço
- Endpoints e lógica de domínio principais
- Serviço automacao recriado do zero
- Correções de dependências, tsconfig, package.json
- Testes automatizados básicos (controllers/services principais)
- Autenticação JWT e RBAC centralizada (todos os serviços NestJS)
- Documentar endpoints REST (Swagger/OpenAPI) em todos os serviços backend
- **Revisão e padronização dos testes e2e** (mock dos guards JwtAuthGuard/RolesGuard aplicado em todos os controllers protegidos)
- Padronização global de tratamento de erros e logs (Winston, filtro de exceção compartilhado via @crm/core)

## Em andamento / Prioridades
- [ ] Automatizar deploy (CI/CD) _(prioridade: ALTA)_
- [ ] Adicionar monitoramento e observabilidade _(prioridade: MÉDIA)_
- [ ] Evoluir integrações entre microserviços _(prioridade: MÉDIA)_
- [ ] Implementar scripts de seed e fixtures _(prioridade: MÉDIA)_
- [ ] Revisar e atualizar documentação técnica _(prioridade: MÉDIA)_

## Notas recentes
- Todos os controllers protegidos por guards possuem testes e2e com mock de autenticação, conforme padrão documentado.
- Pronto para avançar para logs, CI/CD, observabilidade e integrações.

## Tarefas em aberto (detalhado)
- Automatizar deploy (CI/CD) com pipelines (GitHub Actions, Docker, cloud)
- Adicionar monitoramento e observabilidade (OpenTelemetry, Prometheus, Grafana)
- Evoluir integrações entre microserviços (eventos, filas, RabbitMQ)
- Implementar scripts de seed e fixtures para bancos de dados
- Revisar e atualizar documentação técnica (onboarding, arquitetura, exemplos)

---

## 🧩 Fase 1 – Preparação e Estrutura
🎯 **Objetivo:** Consolidar a base monorepo, padrões de código e ambiente de desenvolvimento.

1. **Estrutura inicial**
    - [x] Revisar e padronizar pastas:
       - `/apps/crm`
       - `/apps/bpms`
       - `/apps/automation`
       - `/apps/frontend`
       - `/packages/core` (funções e libs compartilhadas)
       - `/packages/api-gateway` (roteamento e autenticação)
    - [x] Criar `.env` global + `.env.local` para cada app
    - [x] Configurar workspace pnpm ou turborepo
   - [x] Criar Dockerfile e docker-compose.yml com:
       - Postgres
       - Redis
       - RabbitMQ
       - Node apps

2. **Controle de versão e CI/CD**
    - [ ] Configurar GitHub Actions com:
       - Build + Lint + Test em cada push
       - Deploy em branches (staging, production)
    - [x] Configurar `.prettierrc`, `.eslintrc` globais
    - [ ] Configurar commitlint, husky

---

## ⚙️ Fase 2 – Backend Base (Core + API Gateway)
🎯 **Objetivo:** Criar o núcleo unificado de autenticação e roteamento entre os módulos.

1. **API Gateway**
   - Implementar proxy reverso com Fastify ou NestJS + fastify-reply-from
   - Configurar autenticação JWT + refresh token centralizada
   - Rotas:
     - `/crm/*`
     - `/bpms/*`
     - `/automation/*`
   - Middleware de logs e métricas (Prometheus ou OpenTelemetry)
   - Health check e documentação Swagger

2. **Core (Packages)**
   - Criar módulos reutilizáveis:
     - `@core/database` (Prisma ORM + migrações)
     - `@core/auth` (JWT, RBAC, ACL)
     - `@core/utils` (logger, date utils, validações)
     - `@core/events` (pub/sub com RabbitMQ)

---

## 💼 Fase 3 – CRM Module
🎯 **Objetivo:** Gerenciar clientes, leads e oportunidades.

1. **Modelagem**
   - Prisma models: User, Company, Contact, Deal, Pipeline, Task
   - Relacionamentos e seeds iniciais
   - APIs REST/GraphQL: GET /contacts, POST /deals, etc.

2. **Integrações**
   - Envio de e-mails automáticos (Nodemailer)
   - Webhooks para automação (ex: “lead convertido → iniciar fluxo BPMS”)

3. **Conexão CRM ↔ BPMS**
   - Criar fila de eventos (lead.converted)
   - BPMS consome o evento e instancia fluxo “Implantação do cliente”

---

## 🧠 Fase 4 – BPMS Module
🎯 **Objetivo:** Permitir criação e execução de fluxos de processos.

1. **Engine de processos**
   - Modelagem de Process, Task, Transition
   - Suporte a BPMN 2.0 (via bpmn-js ou Camunda Modeler)
   - Estado da instância (ativo, concluído, pausado)

2. **API do BPMS**
   - POST /processes/start
   - POST /tasks/complete
   - GET /instances/:id
   - GET /processes/definitions

3. **Conexão BPMS ↔ Automação**
   - Quando tarefa requer ação automatizada (ex: “criar conta no Bling”), enviar evento bpms.task.auto
   - Automation escuta e executa.

---

## ⚡ Fase 5 – Automação Module
🎯 **Objetivo:** Orquestrar execuções automáticas (scripts, bots, integrações externas).

1. **Engine de automação**
   - Scheduler + Worker
   - Integração com RabbitMQ
   - Scripts externos (Node/Python)
   - Jobs com status: “pending”, “running”, “done”, “error”

2. **Conexões**
   - Automação ↔ CRM: atualizar leads ou negócios automaticamente
   - Automação ↔ BPMS: completar tarefas automáticas
   - Automação ↔ API Gateway: expor endpoints seguros

---

## 🖥️ Fase 6 – Frontend
🎯 **Objetivo:** Painel unificado, modular e responsivo (Next.js + Tailwind + Zustand).

1. **Estrutura**
   - Monorepo app: `/apps/frontend`
   - Layout base com sidebar modular (CRM / BPMS / Automação)
   - Contexto global de autenticação

2. **Interfaces**
   - CRM: Dashboard de leads, deals e contatos
   - BPMS: Visualização de processos (BPMN viewer), Execução de tarefas (manual/automática)
   - Automação: Monitoramento de jobs e logs

3. **Conexão com Backend**
   - API Gateway: `/api/*`
   - Token persistido no localStorage
   - Notificações em tempo real (Socket.IO ou WebSocket)

---

## ☁️ Fase 7 – Deploy e Observabilidade
🎯 **Objetivo:** Rodar o SaaS em nuvem com monitoramento e logs.

1. **Deploy**
   - Containers com Docker + Compose
   - Deploy na Google Cloud Run ou DigitalOcean
   - Banco de dados gerenciado (Supabase, Neon ou RDS)

2. **Observabilidade**
   - Logs centralizados (Grafana Loki)
   - Métricas (Prometheus + Grafana)
   - Alertas (Slack ou Telegram via webhook)

---

## 🔄 Fase 8 – Refinamento e Extensões
- Painel de Admin (criar/gerenciar usuários, roles, planos)
- Billing + Assinaturas (Stripe ou Mercado Pago)
- Módulo de IA (resumo de tarefas, insights automáticos)
- Webhooks externos (integração com Make/Zapier)

---

## 🚀 Fase 9 – Extensões Futuras (roadmap 2.0)
- Marketplace de extensões (onde devs podem publicar automações e fluxos prontos)
- SDK “no-code”: front visual para montar triggers → actions (igual Make ou Zapier)
- Mobile app (React Native) com foco em CRM e tarefas do BPMS
- Assistente IA (Oráculo): resumo de status de clientes, follow-ups e próximos passos
- Plug-in WhatsApp / Telegram / e-mail nativo: automatizar comunicações

---

## Observabilidade e Métricas Prometheus

Todos os serviços backend expõem métricas Prometheus no endpoint `/metrics`.

### Como acessar
- Suba o serviço desejado (ex: `pnpm --filter clientes start:dev`)
- Acesse: `http://localhost:<porta>/metrics`
  - Exemplo para clientes: `http://localhost:3002/metrics`
  - Exemplo para comunicacao: `http://localhost:3004/metrics`
  - Exemplo para empresas: `http://localhost:3006/metrics`
  - Exemplo para tarefas: `http://localhost:3005/metrics`

A resposta será no formato Prometheus, pronta para scrape.

### Exemplo de resposta
```
# HELP process_cpu_user_seconds_total Total user CPU time spent in seconds.
# TYPE process_cpu_user_seconds_total counter
process_cpu_user_seconds_total 0.12
# HELP http_server_requests_seconds HTTP request duration in seconds
# TYPE http_server_requests_seconds histogram
http_server_requests_seconds_bucket{le="0.005",method="GET",path="/metrics",status="200"} 1
...
```

### Configuração Prometheus (exemplo)
Adicione no seu `prometheus.yml`:
```yaml
scrape_configs:
  - job_name: 'crm-clientes'
    static_configs:
      - targets: ['host.docker.internal:3002']
  - job_name: 'crm-comunicacao'
    static_configs:
      - targets: ['host.docker.internal:3004']
  - job_name: 'crm-empresas'
    static_configs:
      - targets: ['host.docker.internal:3006']
  - job_name: 'crm-tarefas'
    static_configs:
      - targets: ['host.docker.internal:3005']
```
> Use `host.docker.internal` se o Prometheus estiver rodando em container e os serviços localmente.

### Dashboards Grafana
- Importe dashboards Prometheus padrão ou crie painéis customizados para visualizar métricas de cada serviço.
- Recomenda-se monitorar: uso de CPU, memória, requisições HTTP, erros 5xx, latência.

### Referências
- [OpenTelemetry Prometheus Exporter](https://opentelemetry.io/docs/instrumentation/js/exporters/#prometheus)
- [Prometheus Getting Started](https://prometheus.io/docs/prometheus/latest/getting_started/)
- [Grafana Getting Started](https://grafana.com/docs/grafana/latest/getting-started/)

---

# Padrão de Mock de Guards em Testes e2e (NestJS)

Para garantir que os testes e2e dos controllers não dependam de autenticação real, utilize o padrão de mock dos guards `JwtAuthGuard` e `RolesGuard` nos arquivos `*.controller.spec.ts` de cada app backend.

**Exemplo de implementação:**

```ts
import { JwtAuthGuard, RolesGuard } from '@crm/auth';
// ...existing code...
beforeAll(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  })
    .overrideGuard(JwtAuthGuard)
    .useValue({ canActivate: () => true })
    .overrideGuard(RolesGuard)
    .useValue({ canActivate: () => true })
    .compile();
  app = moduleFixture.createNestApplication();
  await app.init();
});
```

**Recomendação:**
- Sempre mockar os guards em testes e2e de controllers para isolar a lógica de negócio.
- Replicar esse padrão em todos os serviços NestJS que usam autenticação/roles.
- Não remover testes de autenticação real dos módulos de Auth (testar fluxo real no próprio módulo de auth).
