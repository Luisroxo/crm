# Roadmap Migração apps/vendas (atualizado em 10/10/2025)

- [x] Migrar controllers para src/ (feito)
- [x] Migrar DTOs para src/dto/ (não aplicável - app não possui DTOs próprios)
- [x] Migrar services para src/services/ (feito)
- [x] Corrigir todos os imports após migração (feito)
- [x] Validar build após migração de controllers/services (`pnpm --filter vendas build` OK)
- [x] Integrar guards/decorators via pacote compartilhado `@auth` (feito)
- [x] Ajustar tsconfig/base para path alias de pacotes compartilhados (feito)
- [x] Validar build após integração com pacote compartilhado (feito)
- [x] Atualizar documentação interna sobre a nova estrutura (feito)
- [x] Remover arquivos/pastas obsoletos da raiz após validação final (feito)
- [x] Refatorar imports para paths absolutos e compartilhados (feito em 10/10/2025)

## Observações
- App vendas agora consome guards/decorators de autenticação via pacote compartilhado `@auth` (em packages/auth/dist).
- Build validado após ajustes de path alias e integração.
- Estrutura pronta para expansão seguindo padrão dos demais apps.
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
# Roadmap Migração apps/usuarios (atualizado em 10/10/2025)

- [x] Migrar controllers para src/ (feito)
- [x] Migrar DTOs para src/dto/ (feito)
- [x] Migrar services para src/services/ (feito)
- [x] Corrigir todos os imports após migração (feito)
- [x] Validar build após migração de controllers/services/DTOs (`pnpm --filter usuarios build` OK)
- [x] Migrar guards para src/guards/ (feito)
- [x] Validar build após migrar guards (feito)
- [x] Migrar testes para src/test/ (feito)
- [x] Validar build e rodar testes unitários após migração dos testes (feito)
- [x] Revisar/migrar utilitários/configs residuais para subpastas adequadas em src/ (feito - não há arquivos residuais)
- [x] Atualizar documentação interna sobre a nova estrutura (feito)
- [x] Remover arquivos/pastas obsoletos da raiz após validação final (feito)
- [x] Refatorar imports para paths absolutos (@/) (feito em 10/10/2025)

## Observações
- Controllers, DTOs, services, guards, testes, utilitários/configs, documentação e limpeza já migrados e validados.
- Imports internos agora usam o padrão absoluto `@/` conforme tsconfig e jest.config.
- Build e testes estáveis após ajustes.
# Roadmap Migração apps/automacao (atualizado em 10/10/2025)

- [x] Migrar controllers para src/ (feito)
- [x] Migrar DTOs para src/dto/ (feito)
- [x] Migrar services para src/services/ (feito)
- [x] Corrigir todos os imports após migração (feito)
- [x] Validar build após migração de controllers/services/DTOs (`pnpm --filter automacao build` OK)
- [x] Migrar guards para src/guards/ (não aplicável no MVP)
- [x] Validar build após migrar guards (não aplicável)
- [x] Migrar testes para src/test/ (feito)
- [x] Validar build e rodar testes unitários após migração dos testes (feito)
- [x] Revisar/migrar utilitários/configs residuais para subpastas adequadas em src/ (feito - não há arquivos residuais)
- [x] Atualizar documentação interna sobre a nova estrutura (feito)
- [x] Remover arquivos/pastas obsoletos da raiz após validação final (feito)
- [x] Refatorar imports para paths absolutos (@/) (feito em 10/10/2025)

## Observações
- Controllers, services, testes, utilitários/configs e documentação já migrados e validados.
- Imports internos agora usam o padrão absoluto `@/` conforme tsconfig e jest.config.
- Build e testes estáveis após ajustes.
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
- [x] Atualizar documentação interna sobre a nova estrutura (feito)
- [x] Remover arquivos/pastas obsoletos da raiz após validação final (feito)
- [x] Refatorar imports para paths absolutos (@/) (feito em 10/10/2025)

## Observações
- Controllers, DTOs, services, guards, testes, utilitários/configs, documentação e limpeza já migrados e validados.
- Imports internos agora usam o padrão absoluto `@/` conforme tsconfig e jest.config.
- Build e testes estáveis após ajustes.
