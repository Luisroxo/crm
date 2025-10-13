# [ARQUIVADO] Este roadmap foi migrado para docs/roadmaps-legacy/ em 10/2025. Consulte roadmap-geral.md para status atual.
# Roadmap Técnico — Deploy Produção CRM (Docker)

## Regras de Execução Automática

1. **Execução automática:** Todas as tarefas e subtarefas devem ser executadas imediatamente, sem pedir autorização prévia.
2. **Perguntar só se houver impacto:** Só interrompa para perguntar ao usuário se a tarefa for causar algum impacto relevante no projeto (ex: downtime, perda de dados, breaking change).
3. **Commits apenas ao final da tarefa principal:** Só realize commit/git quando TODAS as subtarefas da tarefa principal estiverem concluídas. Siga o fluxo:
   ```bash
   git add .
   git commit -m "feat: concluir [nome da tarefa]"
   git push
   ```
4. Após cada conclusão, avance automaticamente para a próxima tarefa.


## 1. Preparação para Deploy Produção

## 2. Infraestrutura e Banco

## 3. Deploy e Teste

## 4. Documentação e Checklist Final

> Este roadmap pode ser detalhado e expandido conforme o deploy evoluir.
[conteúdo completo do arquivo]
- [ ] Garantir persistência de dados (volumes Docker, backup)
