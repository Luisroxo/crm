# [ARQUIVADO] Este roadmap foi migrado para docs/roadmaps-legacy/ em 10/2025. Consulte roadmap-geral.md para status atual.

# Roadmap Técnico — Backend CRM (Isolamento Total + Docker)

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



## Rotina de Conclusão de Tarefas

1. **Sub-subtarefas** → após executar, marcar como concluída no roadmap.
2. **Subtarefas** → só considerar concluída quando TODAS as sub-subtarefas estiverem feitas.
3. **Tarefa principal** → só considerar concluída quando TODAS as subtarefas estiverem feitas.  
  - Executar commit/git apenas neste momento (ver regras acima).
4. Após cada conclusão, avance para a próxima tarefa automaticamente.

---

## 1. Isolamento de Microserviços (Prisma + Banco)
- [x] Migrar cada microserviço para isolamento total:
  - [x] **Preparação**
    - [x] Mapear todos os microserviços existentes
    - [x] Definir nome do schema e client para cada serviço
    - [x] Definir nome da variável de ambiente do banco
    
      | Serviço       | Schema/Client                | Variável de Ambiente         |
      |---------------|-----------------------------|-----------------------------|
      | api           | api/prisma/schema.prisma    | DATABASE_URL_API            |
      | auth          | auth/prisma/schema.prisma   | DATABASE_URL_AUTH           |
      | automacao     | automacao/prisma/schema.prisma | DATABASE_URL_AUTOMACAO   |
      | clientes      | clientes/prisma/schema.prisma  | DATABASE_URL_CLIENTES     |
      | comunicacao   | comunicacao/prisma/schema.prisma | DATABASE_URL_COMUNICACAO |
      | empresas      | empresas/prisma/schema.prisma | DATABASE_URL_EMPRESAS      |
      | gateway       | gateway/prisma/schema.prisma | DATABASE_URL_GATEWAY        |
      | tarefas       | tarefas/prisma/schema.prisma | DATABASE_URL_TAREFAS        |
      | usuarios      | usuarios/prisma/schema.prisma | DATABASE_URL_USUARIOS      |
      | vendas        | vendas/prisma/schema.prisma | DATABASE_URL_VENDAS         |
  - [x] **Schema e Client**
    - [x] Criar pasta `prisma/` em cada microserviço
    - [x] Copiar/ajustar modelo relevante para o schema local
    - [x] Configurar generator do Prisma para output local
    - [x] Adicionar datasource com variável exclusiva
    - [x] Rodar `prisma generate` para cada serviço
    - [x] Validar client gerado e tipagem
  - [x] **PrismaService**
    - [x] Criar/ajustar PrismaService para importar do client local
    - [x] Ajustar todos os imports de tipos/models para o client local
  - [x] **Variáveis de Ambiente**
    - [x] Adicionar variável de banco exclusiva no `.env` de cada serviço
    - [x] Garantir que não há vazamento de credenciais entre serviços
  - [x] **CRUD e Testes**
    - [x] Ajustar todos os métodos CRUD para usar o client local
    - [x] Criar/ajustar testes unitários e de integração
    - [x] Validar cobertura mínima de testes
  - [x] **Documentação**
    - [x] Atualizar README do serviço com instruções de setup isolado
    - [x] Documentar variáveis e comandos de build/test

## 2. Orquestração com Docker Compose
- [x] Criar/atualizar `infra/docker/docker-compose.dev.yml` para:
  - [x] Adicionar serviço Docker para cada microserviço
  - [x] Adicionar serviço Docker para cada banco (relacional e não relacional)
  - [x] Mapear variáveis de ambiente para cada container
  - [x] Configurar volumes para persistência dos bancos
  - [x] Expor portas necessárias
  - [x] Definir dependências entre serviços (depends_on)
  - [x] Testar `docker-compose up` localmente
  - [x] Documentar comandos de build, up, down e logs

## 3. Pipeline de Build e Deploy
- [x] Ajustar workflows do GitHub Actions para build/test de cada microserviço isolado
  - [x] Adicionar job para build de imagem Docker de cada serviço
  - [x] Adicionar job para rodar testes unitários/integrados
  - [x] Adicionar job para push de imagem (produção)
  - [x] Documentar fluxo de CI/CD

## 4. Testes e Qualidade
- [x] Testes unitários e de integração para cada microserviço (usando banco isolado)
  - [x] Garantir que todos os endpoints principais possuem teste
  - [x] Validar cobertura mínima (ex: 80%)
- [x] Testes end-to-end (opcional, via API gateway)
  - [x] Criar cenários críticos de E2E
  - [x] Documentar como rodar os testes E2E

## 5. Documentação
- [x] Documentar arquitetura de isolamento, variáveis de ambiente e fluxo de deploy
  - [x] Diagrama de arquitetura atualizado
  - [x] Tabela de variáveis de ambiente por serviço
  - [x] Passo a passo de build, test e deploy
- [x] Atualizar README de cada microserviço
  - [x] Instruções de setup, build, test e uso em Docker

---

> Este roadmap pode ser detalhado e expandido conforme o projeto evoluir e as necessidades do time de backend/devops.
