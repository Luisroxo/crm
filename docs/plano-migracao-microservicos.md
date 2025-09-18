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
- Criar Dockerfile para cada serviço.
- Atualizar docker-compose para rodar múltiplos containers.

## 5. Testes e Validação
- Testar endpoints de cada serviço isoladamente.
- Testar fluxos integrados (ex: login + consulta de clientes).

## 6. Escalabilidade e Observabilidade
- Adicionar logs centralizados.
- Implementar health checks.

## 7. Refino e Otimização
- Migrar bancos para instâncias separadas se necessário.
- Adicionar API Gateway se desejado.

---

> Cada etapa pode ser feita de forma incremental, garantindo que o sistema continue funcionando durante a migração.