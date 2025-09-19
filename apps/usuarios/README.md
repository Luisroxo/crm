# Build Docker (Monorepo)

> Para buildar a imagem Docker deste serviço, execute o comando a partir da raiz do monorepo:

```sh
docker build -f apps/usuarios/Dockerfile -t usuarios .
```

> O contexto precisa ser a raiz do projeto para que todos os arquivos do monorepo estejam acessíveis ao Docker.

No Docker Compose, garanta que o build context do serviço `usuarios` aponte para a raiz do monorepo e o Dockerfile correto:

```yaml
  usuarios:
    build:
      context: ../../  # raiz do monorepo
      dockerfile: apps/usuarios/Dockerfile
    ...
```
# Módulo Clientes

Este módulo é responsável pelo gerenciamento de clientes no CRM, incluindo cadastro, listagem, atualização e remoção.

## Endpoints

Consulte o arquivo `ENDPOINTS.md` para detalhes completos de cada rota, parâmetros e exemplos de uso.

## Estrutura dos Arquivos

- `clientes.controller.ts`: Controller REST com endpoints CRUD.
- `clientes.service.ts`: Lógica de negócio e armazenamento em memória.
- `dto/`: Data Transfer Objects com validação (`class-validator`).
- `clientes.controller.spec.ts` e `clientes.service.spec.ts`: Testes unitários.

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
pnpm exec jest --config=jest.config.js --runInBand --detectOpenHandles --verbose
```

## Observações

- O módulo está isolado, sem integração direta com outros apps.
- Pronto para ser exposto via API Gateway ou integrado a outros serviços.
- Todos os DTOs possuem validação e mensagens customizadas.

## Manutenção

- Atualize os testes ao alterar regras de negócio.
- Mantenha a documentação dos endpoints e exemplos atualizada.
