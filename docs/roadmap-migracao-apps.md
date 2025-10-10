# Roadmap Migração Estrutura dos Apps (Monorepo CRM)

## Prioridades

### (Alta)
- Migrar todos os arquivos .ts e subpastas de `apps/clientes` (exceto package.json, tsconfig.json, Dockerfile, README.md, etc.) para `apps/clientes/src/`
- Migrar todos os arquivos .ts e subpastas de `apps/automacao` (exceto package.json, tsconfig.json, Dockerfile, README.md, etc.) para `apps/automacao/src/`
- Migrar todos os arquivos .ts e subpastas de `apps/usuarios` (exceto package.json, tsconfig.json, Dockerfile, README.md, etc.) para `apps/usuarios/src/`
- Corrigir todos os imports relativos nos arquivos migrados para refletir a nova estrutura
- Testar o build de cada app após a migração (`pnpm --filter <app> build`)


# Roadmap Migração apps/clientes (atualizado em 10/10/2025)

- [x] Migrar controllers para src/ (feito)
- [x] Migrar DTOs para src/dto/ (feito)
- [x] Migrar services para src/services/ (feito)
- [x] Corrigir todos os imports após migração (feito)
- [x] Validar build após migração de controllers/services/DTOs (`pnpm --filter clientes build` OK)
- [x] Migrar guards para src/guards/ (feito)
- [x] Validar build após migrar guards (feito)
- [x] Migrar testes para src/test/ (feito)
- [x] Validar build e rodar testes unitários após migração dos testes (feito)
- [x] Revisar/migrar utilitários/configs residuais para subpastas adequadas em src/ (feito - não há arquivos residuais)
- [ ] Refatorar imports para paths absolutos (opcional)
- [ ] Atualizar documentação interna sobre a nova estrutura
- [ ] Remover arquivos/pastas obsoletos da raiz após validação final

## Observações
- Controllers, DTOs, services, guards, testes e utilitários/configs já migrados e validados.
- Próximos focos: documentação interna e limpeza final.
- Build e testes estáveis após ajustes.
