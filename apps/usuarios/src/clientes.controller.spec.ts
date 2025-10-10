import { Test, TestingModule } from '@nestjs/testing';
import { ClientesController } from '@/clientes.controller';
import { ClientesService } from '@/clientes.service';
import { CreateClienteDto } from '@/dto/create-cliente.dto';
import { UpdateClienteDto } from '@/dto/update-cliente.dto';

describe('ClientesController', () => {
  let controller: ClientesController;
  let service: ClientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientesController],
      providers: [ClientesService],
    }).compile();

    controller = module.get<ClientesController>(ClientesController);
    service = module.get<ClientesService>(ClientesService);
  });

  it('deve criar um cliente', async () => {
    const dto: CreateClienteDto = { nome: 'João', email: 'joao@email.com' };
    const result = await controller.create(dto);
    expect(result).toHaveProperty('id');
    expect(result.nome).toBe(dto.nome);
    expect(result.email).toBe(dto.email);
  });

  it('deve listar todos os clientes', async () => {
    await controller.create({ nome: 'Maria', email: 'maria@email.com' });
    const clientes = await controller.findAll();
    expect(Array.isArray(clientes)).toBe(true);
    expect(clientes.length).toBeGreaterThan(0);
  });

  it('deve buscar um cliente por id', async () => {
    const cliente = await controller.create({ nome: 'Carlos', email: 'carlos@email.com' });
    const encontrado = await controller.findOne(cliente.id.toString());
    expect(encontrado).toEqual(cliente);
  });

  it('deve atualizar um cliente', async () => {
    const cliente = await controller.create({ nome: 'Ana', email: 'ana@email.com' });
    const dto: UpdateClienteDto = { nome: 'Ana Paula' };
    const atualizado = await controller.update(cliente.id.toString(), dto);
    expect(atualizado).not.toBeNull();
    if (atualizado) {
      expect(atualizado.nome).toBe('Ana Paula');
    }
  });

  it('deve remover um cliente', async () => {
    const cliente = await controller.create({ nome: 'Pedro', email: 'pedro@email.com' });
    const removido = await controller.remove(cliente.id.toString());
    expect(removido).toEqual(cliente);
    const encontrado = await controller.findOne(cliente.id.toString());
    expect(encontrado).toBeUndefined();
  });
});
