# Como rodar testes E2E via API Gateway

1. **Pré-requisitos:**
   - Todos os microserviços e bancos devem estar rodando (use `docker-compose up`).
   - O serviço `gateway` deve estar acessível na porta configurada (ex: 3000).

2. **Cenários sugeridos:**
   - Autenticação de usuário (login/logout)
   - Criação e consulta de cliente
   - Fluxo de vendas (criação de lead, movimentação no funil)
   - Comunicação multicanal (envio/recebimento de mensagem)
   - Integração entre serviços (ex: clientes + tarefas)

3. **Execução dos testes:**
   - Utilize ferramentas como `jest`, `supertest`, `cypress` ou `httpie` para simular chamadas HTTP reais ao gateway.
   - Exemplo com `httpie`:
     ```bash
     http POST :3000/auth/login email=admin@crm.com senha=123456
     http GET :3000/clientes
     ```
   - Para rodar testes automatizados:
     ```bash
     pnpm --filter gateway test:e2e
     ```
   - Consulte o README do gateway para detalhes de endpoints e autenticação.

4. **Cobertura e relatórios:**
   - Verifique a cobertura dos testes E2E no relatório gerado após execução.
   - Busque cobrir os principais fluxos críticos do negócio.

---
Dúvidas? Consulte a documentação dos serviços ou abra uma issue.
