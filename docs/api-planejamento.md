# Planejamento de Integrações e API Pública

## 1. Cenários de Integração
- Integração via webhooks para eventos do CRM (novo lead, nova mensagem, tarefa concluída, etc).
- API REST pública para consumo por parceiros, integrações customizadas e apps externos.
- Possibilidade de integração futura com plataformas de automação (ex: Zapier, Make).

## 2. Escopo Inicial da API Pública
- Recursos expostos: Clientes, Empresas, Leads, Mensagens, Tarefas, Funil, Kit de IA.
- Métodos suportados: CRUD completo para cada recurso principal.
- Limites: Paginação, filtros por data/status, ordenação.

## 3. Autenticação
- JWT (Bearer Token) para usuários autenticados.
- Suporte a API Key para integrações server-to-server.
- Planejamento para OAuth2 (futuro, para integrações de terceiros).

## 4. Webhooks
- Endpoints para cadastro, teste e remoção de webhooks.
- Eventos suportados:
  - Novo lead criado
  - Nova mensagem recebida
  - Tarefa criada/concluída
  - Atualização de status de lead
- Payload padronizado (JSON), envio assíncrono com tentativas automáticas em caso de falha.

## 5. Segurança
- Autenticação obrigatória para todas as integrações.
- Permissões por escopo de API (ex: leitura, escrita, admin).
- Proteção contra abuso (rate limiting, logs de acesso).

- OpenAPI/Swagger gerado automaticamente.
- Exemplos de payloads e fluxos de integração.
- Documentação publicada em `docs/api.md` e via Swagger UI.
- **Nota:** O código dos módulos (incluindo automacao) utiliza imports absolutos internos via `@/` para facilitar manutenção.

---

Este planejamento serve como base para a documentação, implementação e evolução das integrações do CRM.