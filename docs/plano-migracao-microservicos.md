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
5. **Serviço de Tarefas** ✅ Estrutura criada, build/teste e endpoint validados
6. **Serviço de Automação/Bots** ✅ Estrutura criada, build/teste e endpoint validados
7. **Gateway/API Gateway** ✅ Estrutura criada, build/teste e endpoint validados

> Recomenda-se extrair um serviço por vez, garantindo build/start/testes limpos antes de avançar para o próximo.

- Adicionar event bus para eventos críticos (ex: cliente criado).

## 4. Infraestrutura
- [x] Criar Dockerfile para cada serviço
- [x] Atualizar/gerar docker-compose.yml para orquestrar todos os containers (incluindo bancos, volumes e dependências)

## 5. Testes e Validação
- [ ] Implementar testes automatizados (unitários e/ou integração) para cada serviço
- [ ] Garantir cobertura de testes dos fluxos principais (login, proxy, CRUD)
- [ ] Documentar como rodar os testes

## 6. Escalabilidade e Observabilidade
- [ ] Adicionar logs centralizados (ex: Winston, Log4js, ELK, Loki)
- [ ] Implementar health checks em cada serviço (endpoint /health ou similar)

## 7. Refino e Otimização
- [ ] Revisar código para melhorias de performance, segurança e organização
- [ ] Remover código morto, duplicado ou desnecessário
- [ ] Ajustar configs para produção (variáveis de ambiente, limites de recursos)

## 8. Implantação dos Bancos de Dados e Modelos
- [x] Garantir que cada microserviço tem seu banco isolado (PostgreSQL, MongoDB, Redis conforme o caso) e volumes persistentes
- [ ] Validar schemas e migrações (Prisma/Mongoose)
- [ ] Configurar e testar variáveis de ambiente de conexão
- [ ] Testar persistência e leitura real dos dados

## 9. Versionamento e Git
- Commit de todas as alterações na branch dev
- Push para o repositório remoto no GitHub ✅
> Cada etapa pode ser feita de forma incremental, garantindo que o sistema continue funcionando durante a migração.