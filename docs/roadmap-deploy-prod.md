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

---

## 1. Preparação para Deploy Produção
- [ ] Mapear ambiente alvo (cloud, VPS, etc.)
- [ ] Definir domínio, portas e variáveis sensíveis
- [ ] Gerar arquivo `docker-compose.prod.yml` baseado no dev, mas adaptado para produção
- [ ] Configurar secrets e variáveis de ambiente reais
- [ ] Validar imagens Docker publicadas no Docker Hub

## 2. Infraestrutura e Banco
- [ ] Provisionar infraestrutura (máquina, cloud, firewall)
- [ ] Garantir persistência de dados (volumes Docker, backup)
- [ ] Configurar rede segura (expor apenas o gateway)

## 3. Deploy e Teste
- [ ] Subir stack com `docker-compose.prod.yml`
- [ ] Validar logs e saúde dos serviços
- [ ] Testar endpoints principais em produção

## 4. Documentação e Checklist Final
- [ ] Documentar variáveis, portas e endpoints de produção
- [ ] Checklist de segurança (secrets, portas, backups)
- [ ] Checklist de rollback e restore

---
> Este roadmap pode ser detalhado e expandido conforme o deploy evoluir.
