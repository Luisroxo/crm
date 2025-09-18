# Barramento de Eventos: Kafka

## Justificativa da Escolha

- Kafka é altamente escalável e robusto, ideal para sistemas distribuídos com múltiplos microserviços.
- Permite persistência de eventos, replay de mensagens e integração com arquitetura event sourcing.
- Suporta grandes volumes de dados e múltiplos consumidores simultâneos.
- Facilita a rastreabilidade, auditoria e integração futura com analytics.
- Apesar de ser mais complexo de operar que RabbitMQ, oferece maior flexibilidade e potencial de crescimento a longo prazo.

## Como será utilizado
- Todos os microserviços publicarão e/ou consumirão eventos via Kafka.
- Fluxos críticos (ex: criação de cliente, movimentação de lead, automações) serão baseados em eventos.
- Sagas e orquestrações de transações distribuídas também utilizarão Kafka como backbone de comunicação.

---

Esta decisão pode ser revisitada conforme o projeto evoluir, mas Kafka é a base recomendada para o início do CRM distribuído.
