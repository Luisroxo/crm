vamos # Domínios e Microserviços Iniciais do CRM

Cada serviço terá seu próprio banco de dados, garantindo isolamento e autonomia.

## 1. Serviço de Clientes
- Descrição: Cadastro, atualização e histórico de clientes; perfis completos, notas e dados de contato.
- Responsabilidades: CRUD de clientes, histórico, perfis, notas.
- Principais entidades: Cliente, Endereço, Nota, HistóricoInteracao.
- Operações: criar/editar/excluir cliente, adicionar nota, consultar histórico.
- Eventos: ClienteCriado, ClienteAtualizado, ClienteExcluido.
- Integrações: publica eventos para Vendas, Tarefas e Comunicação.
- Stack: NestJS, Prisma, PostgreSQL.

## 2. Serviço de Vendas/Funil
- Descrição: Gerenciamento de leads e oportunidades; controle de etapas do funil e movimentação de leads.
- Responsabilidades: CRUD de leads, oportunidades, etapas do funil.
- Principais entidades: Lead, Oportunidade, EtapaFunil, HistóricoLead.
- Operações: criar/editar/excluir lead, mover lead no funil, registrar oportunidade.
- Eventos: LeadCriado, LeadMovido, OportunidadeGanha, OportunidadePerdida.
- Integrações: consome ClienteCriado, publica para Tarefas e Comunicação.
- Stack: NestJS, Prisma, PostgreSQL.

## 3. Serviço de Comunicação
- Descrição: Registro de mensagens (WhatsApp, Instagram, e-mail, etc); caixa de entrada unificada (estrutura inicial).
- Responsabilidades: Registro de mensagens, integração futura com APIs de mensageria.
- Principais entidades: Mensagem, Canal, Anexo.
- Operações: registrar mensagem, buscar histórico, integrar com APIs externas.
- Eventos: MensagemRecebida, MensagemEnviada.
- Integrações: consome eventos de Clientes, Vendas e Tarefas.
- Stack: NestJS, MongoDB (flexível para mensagens), integração futura com APIs externas.

## 4. Serviço de Tarefas
- Descrição: Criação, atribuição e acompanhamento de tarefas; relacionamento de tarefas com clientes e leads.
- Responsabilidades: CRUD de tarefas, atribuição, relacionamento com clientes/leads.
- Principais entidades: Tarefa, Usuário, RelacionamentoTarefa.
- Operações: criar/editar/excluir tarefa, atribuir tarefa, marcar como concluída.
- Eventos: TarefaCriada, TarefaConcluida, TarefaAtribuida.
- Integrações: consome eventos de Clientes e Vendas.
- Stack: NestJS, Prisma, PostgreSQL.

## 5. Serviço de Automação/Bots
- Descrição: Fluxos automatizados e bots de vendas; integração futura com IA.
- Responsabilidades: Fluxos automatizados, bots de vendas, integração futura com IA.
- Principais entidades: FluxoAutomacao, Bot, EstadoExecucao.
- Operações: criar fluxo, executar automação, integrar com IA.
- Eventos: AutomacaoExecutada, BotAcionado.
- Integrações: consome eventos de todos os serviços, publica comandos para eles.
- Stack: NestJS, Redis (para filas/estado), integração futura com serviços de IA.

## 6. Serviço de Usuários & Autenticação
- Descrição: Cadastro e autenticação de usuários; controle de acesso e permissões.
- Responsabilidades: Cadastro, autenticação, controle de acesso.
- Principais entidades: Usuário, Perfil, Permissão.
- Operações: registrar usuário, autenticar, gerenciar permissões.
- Eventos: UsuarioCriado, UsuarioAutenticado.
- Integrações: todos os serviços consomem para validação de acesso.
- Stack: NestJS, Prisma, PostgreSQL, JWT/OAuth.

## 7. Gateway/API Gateway
- Descrição: Roteamento de requisições para os microserviços; autenticação centralizada e rate limiting.
- Responsabilidades: Roteamento, autenticação centralizada, rate limiting.
- Principais entidades: N/A (foco em proxy e roteamento).
- Operações: autenticar requisições, rotear chamadas, aplicar limites.
- Eventos: N/A (pode publicar logs de acesso).
- Integrações: todos os microserviços.
- Stack: NestJS (ou NGINX/Kong para produção), Redis (para rate limiting).
