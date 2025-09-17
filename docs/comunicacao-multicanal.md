# Documentação Técnica: Comunicação Multicanal

## Objetivo
Permitir o registro e consulta de mensagens trocadas por múltiplos canais (WhatsApp, Instagram, Email, SMS, etc), integrando com Cliente, Empresa e Lead.

## Entidade Mensagem (Prisma)
```prisma
model Mensagem {
  id           String   @id @default(cuid())
  conteudo     String
  canal        Canal
  dataEnvio    DateTime @default(now())
  remetente    String?
  destinatario String?

  clienteId    String?
  cliente      Cliente? @relation(fields: [clienteId], references: [id])
  empresaId    String?
  empresa      Empresa? @relation(fields: [empresaId], references: [id])
  leadId       String?
  lead         Lead?    @relation(fields: [leadId], references: [id])

  @@map("mensagens")
}

enum Canal {
  WHATSAPP
  INSTAGRAM
  EMAIL
  SMS
  OUTRO
}
```

## Relacionamentos
- Mensagem pode ser vinculada a Cliente, Empresa e/ou Lead (todos opcionais).
- Relacionamentos inversos permitem consultar todas as mensagens de um Cliente, Empresa ou Lead.

## Endpoints REST
- `POST /mensagens` — Registrar nova mensagem
- `GET /mensagens` — Listar todas as mensagens
- `GET /mensagens/:id` — Detalhar mensagem
- `PUT /mensagens/:id` — Atualizar mensagem
- `DELETE /mensagens/:id` — Remover mensagem

## Exemplo de payload (POST /mensagens)
```json
{
  "conteudo": "Olá, tudo bem?",
  "canal": "WHATSAPP",
  "remetente": "+5511999999999",
  "destinatario": "+5511888888888",
  "clienteId": "ckxyz...",
  "empresaId": null,
  "leadId": "ckabc..."
}
```

## Decisões
- Estrutura flexível para suportar múltiplos canais e integrações futuras.
- Mensagem pode ser registrada mesmo sem vínculo direto (ex: mensagem avulsa).
- Permite rastreabilidade de conversas por cliente, empresa ou lead.

## Exemplos de uso
- Listar todas as mensagens de um cliente:
  - `GET /mensagens?clienteId=ckxyz...`
- Registrar mensagem recebida do Instagram para um lead:
  - `POST /mensagens` com `canal: "INSTAGRAM"` e `leadId` preenchido.

---

Dúvidas ou sugestões de novos canais, basta registrar nesta documentação.
