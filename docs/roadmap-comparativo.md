# Quadro de Comparação dos Roadmaps (out/2025)

| Tópico/Fase                | Roadmap Geral | Roadmap Técnico | Migração Apps | Frontend | Backend | Deploy Prod |
|----------------------------|:-------------:|:---------------:|:-------------:|:--------:|:-------:|:-----------:|
| Estrutura Monorepo         |      ✔️       |       ✔️        |      ✔️       |    ✔️    |   ✔️    |             |
| Migração src/ + Imports    |      ✔️       |       ✔️        |      ✔️       |    ✔️    |   ✔️    |             |
| CI/CD                      |      ⬜       |                 |               |    ✔️    |   ✔️    |     ✔️      |
| Deploy Produção            |      ⬜       |                 |               |    ✔️    |   ✔️    |     ⬜      |
| Observabilidade/Monitoramento|    ⬜       |                 |               |    ✔️    |   ✔️    |     ⬜      |
| Integrações Microserviços  |      ⬜       |       ✔️        |      ✔️       |         |   ✔️    |             |
| Scripts Seed/Fixtures      |      ⬜       |                 |               |         |         |             |
| Documentação Técnica       |      ⬜       |       ✔️        |      ✔️       |    ✔️    |   ✔️    |     ✔️      |
| Testes Unit/Integração     |      ✔️       |       ✔️        |      ✔️       |    ✔️    |   ✔️    |             |
| Testes E2E                 |      ✔️       |                 |               |    ✔️    |   ✔️    |             |
| Frontend (Next.js)         |      ✔️       |                 |               |    ✔️    |         |             |
| CRM/Empresas/Leads         |      ✔️       |       ✔️        |               |    ✔️    |         |             |
| BPMS/Automação             |      ✔️       |       ✔️        |               |         |         |             |
| Placeholders               |      ✔️       |                 |      ✔️       |         |         |             |

Legenda: ✔️ = Concluído | ⬜ = Em aberto/pendente | vazio = não aplicável

---

- O roadmap principal já consolida todas as tarefas em aberto e concluídas dos demais.
- Recomenda-se arquivar os roadmaps setoriais (`docs/roadmap-tecnico.md`, `docs/roadmap-backend.md`, `docs/roadmap-frontend.md`, `docs/roadmap-migracao-apps.md`, `docs/roadmap-deploy-prod.md`) em uma subpasta `docs/roadmaps-legacy/` para referência histórica.
- Manter apenas `docs/roadmap-geral.md` como fonte de verdade viva.
