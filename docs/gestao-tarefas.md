# Documentação Técnica: Gestão de Tarefas

## Objetivo
Permitir o cadastro, atribuição, acompanhamento e conclusão de tarefas vinculadas a clientes, empresas, leads e usuários do CRM.

## Entidade Tarefa (Prisma)
```prisma
model Tarefa {
  id           String   @id @default(cuid())
  titulo       String
  descricao    String?
  status       StatusTarefa @default(PENDENTE)
  dataCriacao  DateTime @default(now())
  dataLimite   DateTime?
  dataConclusao DateTime?

  clienteId    String?
  cliente      Cliente? @relation(fields: [clienteId], references: [id])
  empresaId    String?
  empresa      Empresa? @relation(fields: [empresaId], references: [id])
  leadId       String?
  lead         Lead?    @relation(fields: [leadId], references: [id])
  responsavelId String?
  responsavel   User?   @relation("UserTarefas", fields: [responsavelId], references: [id])

  @@map("tarefas")
}

enum StatusTarefa {
  PENDENTE
  EM_ANDAMENTO
  CONCLUIDA
  CANCELADA
}
```

## Relacionamentos
- Tarefa pode ser vinculada a Cliente, Empresa, Lead e Usuário responsável (todos opcionais).
- Relacionamentos inversos permitem consultar todas as tarefas de um cliente, empresa, lead ou usuário.

## Endpoints REST
- `POST /tarefas` — Criar nova tarefa
- `GET /tarefas` — Listar todas as tarefas
- `GET /tarefas/:id` — Detalhar tarefa
- `PUT /tarefas/:id` — Atualizar tarefa
- `DELETE /tarefas/:id` — Remover tarefa

## Exemplo de payload (POST /tarefas)
```json
{
  "titulo": "Ligar para cliente",
  "descricao": "Confirmar dados cadastrais",
  "status": "PENDENTE",
  "dataLimite": "2025-09-20T18:00:00.000Z",
  "clienteId": "ckxyz...",
  "empresaId": null,
  "leadId": null,
  "responsavelId": "ckuser..."
}
```

## Decisões
- Estrutura flexível para tarefas de qualquer contexto (B2B, B2C, pipeline).
- Permite atribuição e acompanhamento por usuário responsável.
- Status controlado por enum para facilitar filtros e automações.

## Exemplos de uso
- Listar todas as tarefas de um cliente:
  - `GET /tarefas?clienteId=ckxyz...`
- Marcar tarefa como concluída:
  - `PUT /tarefas/:id` com `status: "CONCLUIDA"` e `dataConclusao` preenchida.

---

Dúvidas ou sugestões de novos campos, basta registrar nesta documentação.
