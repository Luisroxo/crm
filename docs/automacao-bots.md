# Documentação Técnica: Automação e Bots

## Objetivo
Permitir a criação de fluxos automatizados para tarefas repetitivas, como envio de mensagens, atribuição de tarefas, movimentação de leads, etc. Futuramente, integrar bots de vendas para automação de interações.

## Modelos Prisma
- **AutomationFlow**: representa um fluxo automatizado.
- **AutomationTrigger**: representa o gatilho (evento) que inicia o fluxo.
- **AutomationAction**: representa a ação executada pelo fluxo.
- Relacionamentos: cada fluxo pode ter múltiplos triggers e ações; ações e triggers podem ser associadas a entidades (Lead, Cliente, Empresa, Usuário).

## Endpoints REST
- `/automation-flows` (CRUD de fluxos)
- `/automation-triggers` (CRUD de triggers)
- `/automation-actions` (CRUD de actions)

### Exemplo de Criação de Fluxo
```json
POST /automation-flows
{
  "nome": "Atribuir tarefa ao criar lead",
  "descricao": "Quando um lead for criado, atribuir uma tarefa ao responsável.",
  "ativo": true,
  "leadId": "<id do lead>"
}
```

### Exemplo de Trigger
```json
POST /automation-triggers
{
  "tipo": "NOVO_LEAD",
  "parametros": {}
}
```

### Exemplo de Action
```json
POST /automation-actions
{
  "tipo": "CRIAR_TAREFA",
  "parametros": { "titulo": "Entrar em contato", "prazo": "2025-09-20" }
}
```

## MVP
- Criar e ativar fluxos simples (ex: “Quando lead for criado, atribuir tarefa X”)
- Visualizar e editar fluxos existentes
- Logs básicos de execução (futuro)

## Futuro
- Integração com bots de vendas (WhatsApp, Telegram, etc)
- Novos tipos de triggers e actions
- Interface visual para montagem de fluxos

---

> Última atualização: 17/09/2025
