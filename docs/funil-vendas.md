# Módulo Funil de Vendas – Documentação Técnica

## Estrutura de Dados (Prisma)
- **Funil**: id, nome, criadoEm
- **Etapa**: id, nome, ordem, funilId
- **Lead**: id, nome, contato, empresa, criadoEm, etapaId
- **Movimentacao**: id, leadId, etapaOrigemId, etapaDestinoId, dataMovimentacao, observacao

## Relacionamentos
- Funil possui Etapas
- Etapa possui Leads
- Movimentacao registra histórico de movimentação de Lead entre Etapas

## Endpoints REST principais
- `GET /funis` — Listar funis
- `POST /funis` — Criar funil
- `GET /funis/:id` — Detalhar funil (com etapas)
- `PUT /funis/:id` — Atualizar funil
- `DELETE /funis/:id` — Remover funil
- `POST /funis/:funilId/etapas` — Adicionar etapa
- `PUT /etapas/:id` — Atualizar etapa
- `DELETE /etapas/:id` — Remover etapa
- `GET /leads` — Listar leads (filtros por etapa/funil)
- `POST /leads` — Criar lead
- `GET /leads/:id` — Detalhar lead (com histórico)
- `PUT /leads/:id` — Atualizar lead
- `DELETE /leads/:id` — Remover lead
- `POST /leads/:id/movimentar` — Mover lead entre etapas
- `GET /leads/:id/movimentacoes` — Histórico de movimentações

## Visualização do Pipeline (MVP)
Endpoint: `GET /funis/:id/pipeline`

Formato de resposta:
```json
[
  {
    "etapaId": "1",
    "nome": "Novo",
    "ordem": 1,
    "leads": [ { "id": "a", "nome": "Empresa X", ... } ]
  },
  ...
]
```

---

Todas as decisões técnicas, estrutura e endpoints deste módulo estão detalhadas neste documento para referência e alinhamento do time.
