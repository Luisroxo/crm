# Estrutura de Sagas para Transações Distribuídas

## O que são Sagas?
Sagas são um padrão para gerenciar transações distribuídas em sistemas de microserviços. Cada etapa de uma transação é executada por um serviço diferente e, em caso de falha, etapas compensatórias são acionadas para manter a consistência.

## Como será no CRM
- Cada fluxo crítico (ex: criação de cliente + lead + tarefa) será orquestrado como uma saga.
- Cada microserviço executa sua parte e publica eventos de sucesso ou falha no Kafka.
- Serviços podem atuar como orquestradores (centralizam o controle) ou coreógrafos (cada serviço reage a eventos).
- Em caso de erro, eventos de compensação são disparados para desfazer etapas já concluídas.

## Exemplo de Saga: Criação de Cliente Completo
1. Serviço de Clientes cria o cliente e publica evento `ClienteCriado`.
2. Serviço de Vendas consome `ClienteCriado`, cria lead e publica `LeadCriado`.
3. Serviço de Tarefas consome `LeadCriado`, cria tarefa e publica `TarefaCriada`.
4. Se algum passo falhar, eventos de compensação são disparados (ex: `CompensarClienteCriado`).

## Benefícios
- Consistência eventual sem bloqueios distribuídos.
- Resiliência a falhas parciais.
- Rastreabilidade completa via eventos no Kafka.

---

A estrutura de sagas será implementada usando eventos Kafka e lógica de orquestração/coreografia nos próprios microserviços.
