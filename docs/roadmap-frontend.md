# [ARQUIVADO] Este roadmap foi migrado para docs/roadmaps-legacy/ em 10/2025. Consulte roadmap-geral.md para status atual.
# Regras de Execução Automática

1. **Execução automática:** Todas as tarefas e subtarefas devem ser executadas imediatamente, sem pedir autorização prévia.
2. **Perguntar só se houver impacto:** Só interrompa para perguntar ao usuário se a tarefa for causar algum impacto relevante no projeto (ex: downtime, perda de dados, breaking change).

## Rotina de Conclusão de Tarefas

Sempre siga a seguinte rotina:

1. **Sub-subtarefas** → após executar, marcar como concluída no roadmap.
2. **Subtarefas** → só considerar concluída quando TODAS as sub-subtarefas estiverem feitas.
3. **Tarefa principal** → só considerar concluída quando TODAS as subtarefas estiverem feitas.  
	 - Executar:
		 ```bash
		 git add .
		 git commit -m "feat: concluir [nome da tarefa]"
		 git push
		 ```
4. Após cada conclusão, avance para a próxima tarefa automaticamente.

# Roadmap Técnico — Frontend CRM (Next.js 14 + Tailwind)


## 1. Setup Inicial
[x] Criar projeto Next.js 14 com App Router e TypeScript
[x] Definir nome e estrutura do projeto
[x] Inicializar repositório Git
[x] Configurar README inicial
[x] Configurar TailwindCSS e PostCSS
[x] Instalar dependências
[x] Criar arquivos de configuração
[x] Testar integração com Next.js
[x] Definir arquitetura de pastas
[x] Criar diretórios: `components`, `hooks`, `services`, `app`/`pages`
[x] Definir padrão de organização de arquivos
[x] Configurar ESLint, Prettier e Husky (padrão de código)
[x] Adicionar scripts de lint e format
[x] Configurar hooks de pre-commit
[x] Configurar variáveis de ambiente (.env.local)
[x] Adicionar variáveis de API base, etc

## 2. Autenticação e Sessão ✅
[x] Implementar tela de login integrada ao backend (gateway)
[x] Gerenciar token JWT no frontend (armazenamento seguro)
[x] Middleware/guard para rotas protegidas
[x] Logout e expiração de sessão

## 3. Layout e Design System
[x] Criar layout base (header, sidebar, footer)
[x] Definir paleta de cores, tipografia e espaçamentos
[x] Criar biblioteca de componentes reutilizáveis (botão, input, modal, tabela, etc)
[x] Responsividade e acessibilidade

## 4. Telas e Funcionalidades Principais
[x] Dashboard (visão geral, métricas)
[x] Gestão de Clientes (CRUD)
[x] Listagem de clientes
[x] Layout da tabela
[x] Paginação
[x] Busca por nome/email
[x] Filtros avançados
[x] Exibir status e ações rápidas
[x] Cadastro/edição de cliente
[x] Formulário de cliente
[x] Validação de campos obrigatórios
[x] Integração com API de criação/edição
[x] Feedback de sucesso/erro
[x] Visualização de detalhes
[x] Exibir dados básicos
[x] Exibir histórico de interações
[x] Ações rápidas (editar, excluir)
[x] Exclusão de cliente
[x] Confirmação de exclusão
[x] Integração com API de exclusão
[x] Atualizar lista após exclusão
[x] Gestão de Empresas (CRUD)
[x] (Fluxo similar ao de clientes, pode ser feito em paralelo)
[x] Listagem de empresas
[x] Layout da tabela
[x] Paginação
[x] Busca por nome/email
[x] Filtros avançados
[x] Exibir status e ações rápidas
[x] Funil de Vendas (pipeline, movimentação de leads)
[x] Tela inicial do pipeline (colunas de etapas, cards de leads, visual Kommo)
[x] Cards de lead com dados principais
[x] Arrastar e soltar leads entre etapas
[x] Comunicação (mensagens, histórico)
[x] Listagem de conversas
[x] Visualização de mensagens
[x] Ações rápidas na lista
[x] Tarefas (criação, atribuição, status)
[x] Listagem de tarefas
[x] Criação/atribuição de tarefa
[x] Alteração de status e ações rápidas
[x] Automação/Bots (visualização de fluxos)
[x] Listagem de fluxos de automação
[x] Visualização de detalhes do fluxo
[x] Ações rápidas na lista de fluxos
[x] Perfil do usuário e configurações
[x] Tela de visualização do perfil
[x] Edição de dados do perfil
[x] Alteração de senha
[x] Configurações de preferências

## 5. Integração com APIs
[x] Criar camada de serviços para consumo das APIs internas (gateway)
[x] Gerenciar erros, loading e feedbacks ao usuário
[x] Paginação, filtros e busca nas listas
[x] Upload/download de arquivos (se aplicável)

[x] Testes unitários de componentes (Jest + React Testing Library)
[x] Testes de integração de páginas e fluxos críticos
[x] Testes end-to-end (Cypress ou Playwright)
[x] Configurar variáveis de ambiente para produção
[x] Configurar build e deploy automatizado (Vercel, Netlify, Docker, etc)
[x] Monitoramento básico (Sentry, Vercel Analytics, etc)

## 8. Documentação e Onboarding
[x] Documentar arquitetura, padrões e principais decisões
[x] Criar guia de onboarding para novos devs
[x] Exemplos de uso dos componentes e hooks

---

> Este roadmap pode ser detalhado e expandido conforme o projeto evoluir e as necessidades do time de produto/UX.