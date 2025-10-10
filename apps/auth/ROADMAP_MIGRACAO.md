# Roadmap Migração apps/auth (atualizado em 10/10/2025)

- [x] Migrar controllers para src/ (feito)
- [x] Migrar DTOs para src/dto/ (feito)
- [x] Migrar services para src/services/ (feito)
- [x] Corrigir todos os imports após migração (feito)
- [x] Validar build após migração de controllers/services/DTOs (`pnpm --filter auth build` OK)
- [x] Migrar guards para src/guards/ (feito)
- [x] Validar build após migrar guards (feito)
- [x] Migrar testes para src/test/ (feito)
- [x] Validar build e rodar testes unitários após migração dos testes (feito)
- [x] Revisar/migrar utilitários/configs residuais para subpastas adequadas em src/ (feito - não há arquivos residuais)
- [x] Atualizar documentação interna sobre a nova estrutura (feito)
- [x] Remover arquivos/pastas obsoletos da raiz após validação final (feito)
- [x] Refatorar imports para paths absolutos (@/) (feito em 10/10/2025)

## Observações
- Estrutura básica Nest já estava em src/.
- App pronto para expansão seguindo padrão dos demais apps.
- Build validado após ajustes.
