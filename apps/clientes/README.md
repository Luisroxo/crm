# Módulo Clientes

Este módulo é responsável pelo gerenciamento de clientes no CRM, incluindo cadastro, listagem, atualização e remoção.

## Endpoints

Consulte o arquivo `ENDPOINTS.md` para detalhes completos de cada rota, parâmetros e exemplos de uso.

## Estrutura dos Arquivos (após migração)

- Todo o código-fonte está em `src/`.
- `src/controllers/`: Controllers REST (ex: `clientes.controller.ts`, `empresas.controller.ts`, etc.)
- `src/services/`: Serviços de domínio e integrações (ex: `clientes.service.ts`, `empresas.service.ts`, etc.)
- `src/dto/`: Data Transfer Objects com validação (`class-validator`).
- `src/guards/`: Guards de autenticação/autorização (ex: `jwt-auth.guard.ts`).
- `src/test/`: Testes unitários e de integração (`*.spec.ts`).
- `src/`: Arquivos principais (`main.ts`, `otel-bootstrap.ts`, etc.)
- `ENDPOINTS.md`: Documentação de rotas.

## Modelo Prisma

O modelo `Cliente` está definido em `prisma/schema.prisma`:
```prisma
model Cliente {
  id        String   @id @default(cuid())
  nome      String
  email     String   @unique
  telefone  String?
  endereco  String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  @@map("clientes")
}
```

## Testes

Execute os testes unitários com:
```sh
pnpm --filter clientes test
```

## Observações

- O módulo está isolado, sem integração direta com outros apps.
- Pronto para ser exposto via API Gateway ou integrado a outros serviços.
- Todos os DTOs possuem validação e mensagens customizadas.

## Manutenção

- Atualize os testes ao alterar regras de negócio.
- Mantenha a documentação dos endpoints e exemplos atualizada.
- Mantenha a estrutura de pastas conforme padrão do monorepo (`src/` centraliza todo o código).
