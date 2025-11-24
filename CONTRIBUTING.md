# Como Contribuir

## Fluxo de Trabalho (Solo Development)

1. Trabalhe diretamente na branch `main`
2. Crie branches para features experimentais ou grandes refatorações:
   - Para features: `feature/nome-funcionalidade`
   - Para bugs: `fix/nome-do-bug`
3. Realize commits pequenos e descritivos
4. Garanta que testes estão passando antes de fazer push
5. Merge direto em `main` após validação local

## Boas Práticas

- Use mensagens de commit claras seguindo Conventional Commits
- Mantenha código limpo e documentado
- Execute `lint` e `test` antes de cada commit
- Use branches apenas para desenvolvimento de features complexas

## Conventional Commits

Formato: `tipo(escopo): descrição`

Tipos:
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `refactor`: Refatoração
- `test`: Testes
- `chore`: Manutenção
