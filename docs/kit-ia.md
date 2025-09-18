# Kit de IA

## Visão Geral
O Kit de IA do CRM oferece recursos inteligentes para automação e apoio ao usuário, incluindo:
- Respostas automáticas
- Sugestão de mensagens
- Preenchimento inteligente de perfis

## Entidades e Modelos
As entidades de IA foram modeladas no Prisma:
- `IaSuggestion`: Sugestões de mensagens para leads/clientes.
- `IaAutoReply`: Respostas automáticas para mensagens recebidas.
- `IaProfileCompletion`: Recomendações para completar perfis de clientes ou leads.

## Endpoints REST
Cada entidade possui endpoints REST CRUD:

### Sugestões de Mensagens
- `POST /ia-suggestions` — Cria sugestão
- `GET /ia-suggestions` — Lista sugestões
- `GET /ia-suggestions/:id` — Detalha sugestão
- `PATCH /ia-suggestions/:id` — Atualiza sugestão
- `DELETE /ia-suggestions/:id` — Remove sugestão

### Respostas Automáticas
- `POST /ia-auto-replies` — Cria resposta automática
- `GET /ia-auto-replies` — Lista respostas
- `GET /ia-auto-replies/:id` — Detalha resposta
- `PATCH /ia-auto-replies/:id` — Atualiza resposta
- `DELETE /ia-auto-replies/:id` — Remove resposta

### Preenchimento Inteligente de Perfis
- `POST /ia-profile-completions` — Cria recomendação
- `GET /ia-profile-completions` — Lista recomendações
- `GET /ia-profile-completions/:id` — Detalha recomendação
- `PATCH /ia-profile-completions/:id` — Atualiza recomendação
- `DELETE /ia-profile-completions/:id` — Remove recomendação

## Decisões Técnicas
- Todas as relações Prisma usam nomes explícitos para facilitar manutenção.
- Cada entidade IA está ligada a Cliente, Empresa, Lead ou Mensagem conforme aplicável.
- Serviços e controllers seguem padrão NestJS modular.

## Exemplo de Uso
```json
POST /ia-suggestions
{
  "mensagem": "Olá, posso ajudar?",
  "leadId": "..."
}
```

## Integração
Esses recursos podem ser consumidos pelo frontend web ou por integrações externas via API REST.

---

Documentação sujeita a evolução conforme novas funcionalidades de IA forem implementadas.