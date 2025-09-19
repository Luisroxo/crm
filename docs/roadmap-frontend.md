# Roadmap Técnico — Frontend CRM (Next.js 14 + Tailwind)


## 1. Setup Inicial
- [x] Criar projeto Next.js 14 com App Router e TypeScript
  - [x] Definir nome e estrutura do projeto
  - [x] Inicializar repositório Git
  - [x] Configurar README inicial
- [x] Configurar TailwindCSS e PostCSS
  - [x] Instalar dependências
  - [x] Criar arquivos de configuração
  - [x] Testar integração com Next.js
- [x] Definir arquitetura de pastas
  - [x] Criar diretórios: `components`, `hooks`, `services`, `app`/`pages`
  - [x] Definir padrão de organização de arquivos
- [x] Configurar ESLint, Prettier e Husky (padrão de código)
  - [x] Adicionar scripts de lint e format
  - [x] Configurar hooks de pre-commit
- [x] Configurar variáveis de ambiente (.env.local)
  - [x] Adicionar variáveis de API base, etc

## 2. Autenticação e Sessão ✅
- [x] Implementar tela de login integrada ao backend (gateway)
- [x] Gerenciar token JWT no frontend (armazenamento seguro)
- [x] Middleware/guard para rotas protegidas
- [x] Logout e expiração de sessão

## 3. Layout e Design System
- [x] Criar layout base (header, sidebar, footer)
- [x] Definir paleta de cores, tipografia e espaçamentos
- [ ] Criar biblioteca de componentes reutilizáveis (botão, input, modal, tabela, etc)
- [ ] Responsividade e acessibilidade

## 4. Telas e Funcionalidades Principais
- [ ] Dashboard (visão geral, métricas)
- [ ] Gestão de Clientes (CRUD)
	- [ ] Listagem de clientes
		- [ ] Layout da tabela
		- [ ] Paginação
		- [ ] Busca por nome/email
		- [ ] Filtros avançados
		- [ ] Exibir status e ações rápidas
	- [ ] Cadastro/edição de cliente
		- [ ] Formulário de cliente
		- [ ] Validação de campos obrigatórios
		- [ ] Integração com API de criação/edição
		- [ ] Feedback de sucesso/erro
	- [ ] Visualização de detalhes
		- [ ] Exibir dados básicos
		- [ ] Exibir histórico de interações
		- [ ] Ações rápidas (editar, excluir)
	- [ ] Exclusão de cliente
		- [ ] Confirmação de exclusão
		- [ ] Integração com API de exclusão
		- [ ] Atualizar lista após exclusão
- [ ] Gestão de Empresas (CRUD)
	- [ ] (Fluxo similar ao de clientes, pode ser feito em paralelo)
- [ ] Funil de Vendas (pipeline, movimentação de leads)
- [ ] Comunicação (mensagens, histórico)
- [ ] Tarefas (criação, atribuição, status)
- [ ] Automação/Bots (visualização de fluxos)
- [ ] Perfil do usuário e configurações

## 5. Integração com APIs
- [ ] Criar camada de serviços para consumo das APIs internas (gateway)
- [ ] Gerenciar erros, loading e feedbacks ao usuário
- [ ] Paginação, filtros e busca nas listas
- [ ] Upload/download de arquivos (se aplicável)

## 6. Testes e Qualidade
- [ ] Testes unitários de componentes (Jest + React Testing Library)
- [ ] Testes de integração de páginas e fluxos críticos
- [ ] Testes end-to-end (Cypress ou Playwright)

## 7. Deploy e Monitoramento
- [ ] Configurar build e deploy automatizado (Vercel, Netlify, Docker, etc)
- [ ] Configurar variáveis de ambiente para produção
- [ ] Monitoramento básico (Sentry, Vercel Analytics, etc)

## 8. Documentação e Onboarding
- [ ] Documentar arquitetura, padrões e principais decisões
- [ ] Criar guia de onboarding para novos devs
- [ ] Exemplos de uso dos componentes e hooks

---

> Este roadmap pode ser detalhado e expandido conforme o projeto evoluir e as necessidades do time de produto/UX.