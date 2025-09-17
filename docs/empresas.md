# Documentação Técnica: Módulo de Empresas (PJ)

## Objetivo
Modelar o módulo de Empresas (PJ) de forma separada do Cliente (PF), permitindo:
- Cadastro e gestão de empresas (PJ) independentes.
- Associação opcional de Clientes (PF) a uma Empresa (PJ).
- Integração futura com Funil de Vendas e Leads.

## Entidade Empresa (PJ)
- id: String (cuid, PK)
- razaoSocial: String
- nomeFantasia: String?
- cnpj: String (único)
- inscricaoEstadual: String?
- telefone: String?
- email: String?
- endereco: String?
- createdAt: DateTime
- updatedAt: DateTime
- clientes: Cliente[] (relacionamento 1:N)

## Relacionamento com Cliente (PF)
- Cliente pode ter um campo opcional empresaId.
- Empresa pode ter vários clientes vinculados.


## Integração com Funil de Vendas e Leads
- Agora, um Lead pode ser vinculado tanto a uma Empresa (PJ) quanto a um Cliente (PF).
- O campo `empresaId` e/ou `clienteId` em Lead são opcionais, permitindo flexibilidade para B2B e B2C.
- Empresas e Clientes possuem relação inversa com Lead, facilitando consultas e integrações.

### Exemplo de modelagem Prisma (Lead)
```prisma
model Lead {
  id         String   @id @default(cuid())
  nome       String
  contato    String?
  criadoEm   DateTime @default(now())
  etapaId    String
  etapa      Etapa    @relation(fields: [etapaId], references: [id])
  movimentacoes Movimentacao[]

  empresaId  String?
  empresa    Empresa? @relation(fields: [empresaId], references: [id])
  clienteId  String?
  cliente    Cliente? @relation(fields: [clienteId], references: [id])

  @@map("leads")
}
```

## Exemplo de modelagem Prisma
```prisma
model Empresa {
  id                 String    @id @default(cuid())
  razaoSocial        String
  nomeFantasia       String?
  cnpj               String   @unique
  inscricaoEstadual  String?
  telefone           String?
  email              String?
  endereco           String?
  createdAt          DateTime @default(now())
  updatedAt          DateTime @updatedAt
  clientes           Cliente[]

  @@map("empresas")
}

model Cliente {
  // ...campos existentes...
  empresaId String?
  empresa   Empresa? @relation(fields: [empresaId], references: [id])
}
```


## Decisões
- Separação clara entre PF (Cliente) e PJ (Empresa).
- Associação opcional: Cliente pode ou não estar vinculado a uma Empresa.
- CNPJ único para Empresas.
- Lead pode ser B2B (Empresa), B2C (Cliente) ou ambos.
- Estrutura flexível para integrações futuras e consultas eficientes.

## Próximos passos
- Atualizar schema.prisma.
- Gerar e aplicar migration.
- Atualizar endpoints e serviços.
- Documentar endpoints REST.
