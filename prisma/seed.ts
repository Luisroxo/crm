import { PrismaClient, DealStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Funil (Pipeline)
  const funil = await prisma.funil.upsert({
    where: { nome: 'Funil Principal' },
    update: {},
    create: {
      nome: 'Funil Principal',
      etapas: {
        create: [
          { nome: 'Novo', ordem: 1 },
          { nome: 'Contato Feito', ordem: 2 },
          { nome: 'Proposta', ordem: 3 },
          { nome: 'Fechado', ordem: 4 },
        ],
      },
    },
    include: { etapas: true },
  });

  // Seed Empresa (Company)
  const empresa = await prisma.empresa.upsert({
    where: { cnpj: '12345678000199' },
    update: {},
    create: {
      razaoSocial: 'Empresa Exemplo',
      nomeFantasia: 'Exemplo',
      cnpj: '12345678000199',
      email: 'contato@exemplo.com',
    },
  });

  // Seed Cliente (Contact)
  const cliente = await prisma.cliente.upsert({
    where: { email: 'cliente@exemplo.com' },
    update: {},
    create: {
      nome: 'Cliente Exemplo',
      email: 'cliente@exemplo.com',
      empresa: { connect: { id: empresa.id } },
    },
  });

  // Seed User (Responsável)
  const user = await prisma.user.upsert({
    where: { email: 'vendedor@crm.com' },
    update: {},
    create: {
      nome: 'Vendedor CRM',
      email: 'vendedor@crm.com',
      senha: 'senha123',
    },
  });

  // Seed Lead
  const etapaNovo = funil.etapas.find(e => e.nome === 'Novo');
  const lead = await prisma.lead.create({
    data: {
      nome: 'Lead Exemplo',
      etapa: { connect: { id: etapaNovo?.id } },
      empresa: { connect: { id: empresa.id } },
      cliente: { connect: { id: cliente.id } },
    },
  });

  // Seed Deal (Negócio)
  await prisma.deal.create({
    data: {
      titulo: 'Negócio Exemplo',
      descricao: 'Primeiro negócio seed',
      valor: 10000,
      status: DealStatus.ABERTO,
      funil: { connect: { id: funil.id } },
      etapa: { connect: { id: etapaNovo?.id } },
      cliente: { connect: { id: cliente.id } },
      empresa: { connect: { id: empresa.id } },
      lead: { connect: { id: lead.id } },
      responsavel: { connect: { id: user.id } },
    },
  });

  console.log('Seeds CRM inseridos com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
