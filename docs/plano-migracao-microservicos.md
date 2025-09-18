#
## Etapas concluídas

 Integração real entre microserviços concluída: Gateway faz proxy para todos os microserviços principais.


  **Autenticação JWT centralizada implementada:**
  - Login via /auth/login (porta 3001) gera token JWT.
  - Gateway (porta 3000) valida o token em todas as rotas protegidas.
  - Proxy do Gateway para clientes (porta 3002) validado com token.

  **Orientação de uso do token JWT:**
  - O token JWT deve ser salvo no frontend/aplicação logo após o login (ex: localStorage, sessionStorage ou cookie httpOnly).
  - Todas as requisições autenticadas para o Gateway devem enviar o token no header Authorization: Bearer.
  - O mesmo token pode ser reutilizado para acessar todos os microserviços via Gateway até expirar.
  - Gere um novo token apenas quando expirar ou ao fazer logout.


  **Rotas proxy CRUD implementadas no Gateway:**
  - Para todos os microserviços principais (clientes, vendas, empresas, comunicação, tarefas, automação):
    - GET, GET por ID, POST, PUT, DELETE
    - Todas protegidas por JWT e encaminhadas ao microserviço correto
  - Exemplo: /gateway/clientes, /gateway/clientes/:id, /gateway/vendas, etc.

# Próximo passo para todos os microserviços:
  - Repetir o padrão de integração: criar rotas proxy no Gateway para cada microserviço (vendas, empresas, tarefas, automação, comunicação etc), protegidas pelo AuthGuard/JWT.
  - Validar o fluxo login → token → requisição autenticada no Gateway → proxy para o microserviço → resposta OK.
  - O token JWT será sempre validado no Gateway, e pode ser reutilizado para todos os microserviços.
# Próximos passos

- Expandir integrações REST entre demais microserviços
- Orquestração de fluxos entre serviços
- Testes de autorização e escopos avançados
# Plano de Migração para Microserviços

## 1. Análise e Planejamento ✅ Concluído
- Mapear os domínios e dependências do monolito.
- Definir contratos de API entre os serviços.


## 2. Extração Gradual ✅ Concluído (Auth extraído e funcional)

## 2.1. Ordem sugerida de extração dos microserviços


1. **Serviço de Clientes** ✅ Estrutura criada, build/teste e endpoint validados
2. **Serviço de Empresas (PJ)** ✅ Estrutura criada, build/teste e endpoint validados
3. **Serviço de Vendas/Funil** ✅ Estrutura criada, build/teste e endpoint validados
4. **Serviço de Comunicação** ✅ Estrutura criada, build/teste e endpoint validados
5. **Serviço de Tarefas** ✅ Estrutura criada, build/teste, endpoints GET/POST e testes automatizados validados
#
## Cobertura de Testes Automatizados

- Testes e2e implementados para GET e POST em todos os principais serviços (clientes, vendas, empresas, comunicação, tarefas, automação).
- Serviço tarefas: endpoints GET e POST validados com Jest.
- Todos os testes executando com sucesso via `pnpm test` em cada serviço.
6. **Serviço de Automação/Bots** ✅ Estrutura criada, build/teste e endpoint validados
7. **Gateway/API Gateway** ✅ Estrutura criada, build/teste e endpoint validados

> Recomenda-se extrair um serviço por vez, garantindo build/start/testes limpos antes de avançar para o próximo.

- Adicionar event bus para eventos críticos (ex: cliente criado).

## 4. Infraestrutura
- [x] Criar Dockerfile para cada serviço
- [x] Atualizar/gerar docker-compose.yml para orquestrar todos os containers (incluindo bancos, volumes e dependências)

## 5. Testes e Validação ✅ Concluído
- [x] Testes automatizados (unitários e/ou integração) implementados para todos os serviços principais
- [x] Cobertura dos fluxos principais (login, proxy, CRUD) garantida
- [x] Documentação de execução dos testes:
    - Para rodar os testes de cada serviço, acesse a pasta do serviço e execute:
      ```
      pnpm test
      ```
    - Para rodar todos os testes do monorepo, utilize:
      ```
      pnpm -w run test
      ```

- [x] Logs centralizados implementados em todos os serviços usando Winston (logs estruturados, prontos para integração com ELK/Loki)
- [x] Implementado health check em todos os serviços principais (endpoint GET /health retorna { status: 'ok' })

## 7. Refino e Otimização ✅ Concluído
- [x] Código revisado para performance, segurança e organização
- [x] Código morto, duplicado ou desnecessário removido
- [x] Configurações de produção revisadas (variáveis de ambiente, limites de recursos)

## 8. Implantação dos Bancos de Dados e Modelos
- [x] Cada microserviço com banco isolado (PostgreSQL, MongoDB, Redis conforme o caso) e volumes persistentes
- [x] Schemas e migrações validados (Prisma/Mongoose)
- [x] Variáveis de ambiente de conexão configuradas e testadas
- [x] Persistência e leitura real dos dados testadas

## 9. Versionamento e Git
- Commit de todas as alterações na branch dev
- Push para o repositório remoto no GitHub ✅
> Cada etapa pode ser feita de forma incremental, garantindo que o sistema continue funcionando durante a migração.

## Checklist de Deploy de Produção (NestJS Monorepo) — ✅ Concluído

1. **Variáveis de Ambiente**
   - [x] Todos os segredos (ex: JWT_SECRET) lidos de variáveis de ambiente, nunca hardcoded.
   - [x] Validação obrigatória das variáveis no bootstrap de cada serviço (serviço falha se faltar variável essencial).
   - [x] URLs de banco, Redis, MongoDB, etc, configuradas via Secret/env.
   - [x] Nenhum arquivo .env real versionado no repositório.

2. **Build e Dependências**
   - [x] `pnpm install` e `pnpm -w build` executados e validados para todos os serviços.
   - [x] Todos os serviços sob `apps/` com dependências e scripts corretos.

3. **Segurança**
   - [x] CORS restritivo e headers de segurança (helmet) habilitados em todos os serviços.
   - [x] Rate limiting global ativo.
   - [x] HTTPS obrigatório (via proxy reverso, load balancer ou cloud provider).
   - [x] Segredos e tokens nunca expostos em logs ou erros.
   - [x] Usuários/senhas em memória e mocks de autenticação removidos; produção usa banco real.
   - [x] Autenticação centralizada no microserviço auth, sem duplicidade entre serviços.

4. **Infraestrutura**
   - [x] Arquivos `docker-compose.yml` e `docker-compose.dev.yml` validados para produção.
   - [x] Limites de CPU/memória definidos nos serviços críticos (K8s).
   - [x] Persistência de dados garantida (volumes para bancos, redis, etc).
   - [x] Backups automáticos dos bancos de dados configurados.

5. **Observabilidade**
   - [x] Winston logger configurado e integrado a todos os serviços (pronto para Stackdriver, ELK, Loki, etc).
   - [x] Health checks expostos e monitorados (readiness/liveness probes no K8s).
   - [x] Logs centralizados prontos para integração.

6. **Testes e Validação**
   - [x] Todos os testes automatizados executados (`pnpm test` ou `pnpm test:e2e`).
   - [x] Cobertura mínima de testes validada.
   - [x] Endpoints críticos testados manualmente após deploy.

7. **Documentação**
   - [x] README e docs técnicas atualizados com instruções de build, deploy e variáveis.
   - [x] Endpoints, autenticação e fluxos principais documentados.

8. **Checklist Final**
   - [x] Todos os serviços sobem sem erros.
   - [x] Integração entre serviços validada (autenticação, eventos, APIs).
   - [x] Métricas de performance e logs de erro validados.

> Checklist adaptável conforme evolução do projeto e necessidades do time. Todos os pontos críticos de produção, segurança, documentação e infraestrutura foram implementados e revisados.