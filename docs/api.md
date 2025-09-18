# Documentação da API Pública e Integrações

## OpenAPI/Swagger
A documentação dos endpoints REST do CRM será gerada automaticamente via Swagger, cobrindo:
- Recursos: Clientes, Empresas, Leads, Mensagens, Tarefas, Funil, Kit de IA, Webhooks
- Métodos: CRUD completo para cada recurso
- Autenticação: JWT (Bearer), API Key
- Versionamento: `/v1/`, `/v2/` (futuro)

### Exemplo de Autenticação
```http
GET /api/v1/clientes
Authorization: Bearer <token>
```

### Exemplo de Payload (criação de lead)
```json
POST /api/v1/leads
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "empresaId": "...",
  "etapaId": "..."
}
```

### Exemplo de Webhook (novo lead)
```json
POST /webhooks/receber
{
  "evento": "lead_criado",
  "lead": {
    "id": "...",
    "nome": "João Silva",
    "email": "joao@email.com"
  },
  "data": "2025-09-17T12:00:00Z"
}
```

## Versionamento
- Todas as rotas públicas seguem o padrão `/api/v1/`.
- Mudanças incompatíveis resultarão em nova versão (`/api/v2/`).

## Swagger UI
- A interface Swagger estará disponível em `/api/docs` para consulta e testes interativos.

## Segurança
- Todos os endpoints exigem autenticação.
- Permissões por escopo (ex: leitura, escrita, admin) serão aplicadas conforme planejamento.

## Segurança e Controle de Acesso

- Todos os endpoints de integração exigem autenticação JWT (Bearer Token).
- Recomenda-se uso de escopos de permissão (ex: leitura, escrita, admin) para granularidade de acesso.
- Exemplo de header:

```http
Authorization: Bearer <seu_token_jwt>
```

- Endpoints de webhooks protegidos por autenticação.
- Rate limiting e logs de acesso recomendados para produção.

---

Consulte também o arquivo `docs/api-planejamento.md` para detalhes técnicos e decisões de arquitetura.

Para detalhes técnicos e exemplos completos, consulte a interface Swagger ou este arquivo.
