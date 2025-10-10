import { ClientesService } from '@/services/clientes.service';
import { CreateClienteDto } from '@/dto/create-cliente.dto';
import { UpdateClienteDto } from '@/dto/update-cliente.dto';

describe('ClientesService', () => {
  let service: ClientesService;

  beforeEach(() => {
    service = new ClientesService();
  });

  it('deve criar um cliente', () => {
    const dto: CreateClienteDto = { nome: 'João', email: 'joao@email.com' };
    const cliente = service.create(dto);
    expect(cliente).toHaveProperty('id');
    expect(cliente.nome).toBe(dto.nome);
    expect(cliente.email).toBe(dto.email);
  });

  it('deve listar todos os clientes', () => {
    service.create({ nome: 'Maria', email: 'maria@email.com' });
    const clientes = service.findAll();
    expect(Array.isArray(clientes)).toBe(true);
    expect(clientes.length).toBeGreaterThan(0);
  });

  it('deve buscar um cliente por id', () => {
    const cliente = service.create({ nome: 'Carlos', email: 'carlos@email.com' });
    const encontrado = service.findOne(cliente.id);
    expect(encontrado).toEqual(cliente);
  });

  it('deve atualizar um cliente', () => {
    const cliente = service.create({ nome: 'Ana', email: 'ana@email.com' });
    const dto: UpdateClienteDto = { nome: 'Ana Paula' };
    const atualizado = service.update(cliente.id, dto);
    expect(atualizado).not.toBeNull();
    if (atualizado) {
      expect(atualizado.nome).toBe('Ana Paula');
    }
  });

  it('deve remover um cliente', () => {
    const cliente = service.create({ nome: 'Pedro', email: 'pedro@email.com' });
    const removido = service.remove(cliente.id);
    expect(removido).toEqual(cliente);
    expect(service.findOne(cliente.id)).toBeUndefined();
  });
});
