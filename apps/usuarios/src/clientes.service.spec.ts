import { PrismaService } from '@/prisma.service';
import { ClientesService } from '@/clientes.service';
import { CreateClienteDto } from '@/dto/create-cliente.dto';
import { UpdateClienteDto } from '@/dto/update-cliente.dto';

describe('ClientesService', () => {
  let service: ClientesService;
  let prisma: PrismaService;

  beforeEach(() => {
    prisma = new PrismaService();
    service = new ClientesService(prisma);
  });

  it('deve criar um cliente', async () => {
    const dto: CreateClienteDto = { nome: 'João', email: 'joao@email.com' };
    const cliente = await service.create(dto);
    expect(cliente).toHaveProperty('id');
    expect(cliente.nome).toBe(dto.nome);
    expect(cliente.email).toBe(dto.email);
  });

  it('deve listar todos os clientes', async () => {
    await service.create({ nome: 'Maria', email: 'maria@email.com' });
    const clientes = await service.findAll();
    expect(Array.isArray(clientes)).toBe(true);
    expect(clientes.length).toBeGreaterThan(0);
  });

  it('deve buscar um cliente por id', async () => {
    const cliente = await service.create({ nome: 'Carlos', email: 'carlos@email.com' });
  const encontrado = await service.findOne(cliente.id);
    expect(encontrado).toEqual(cliente);
  });

  it('deve atualizar um cliente', async () => {
    const cliente = await service.create({ nome: 'Ana', email: 'ana@email.com' });
    const dto: UpdateClienteDto = { nome: 'Ana Paula' };
  const atualizado = await service.update(cliente.id, dto);
    expect(atualizado).not.toBeNull();
    if (atualizado) {
      expect(atualizado.nome).toBe('Ana Paula');
    }
  });

  it('deve remover um cliente', async () => {
    const cliente = await service.create({ nome: 'Pedro', email: 'pedro@email.com' });
  const removido = await service.remove(cliente.id);
    expect(removido).toEqual(cliente);
  const encontrado = await service.findOne(cliente.id);
    expect(encontrado).toBeUndefined();
  });
});
