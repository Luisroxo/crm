import { Test, TestingModule } from '@nestjs/testing';
import { VendasService } from './vendas.service';

describe('VendasService', () => {
  let service: VendasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendasService],
    }).compile();
    service = module.get<VendasService>(VendasService);
  });

  it('deve estar definido', () => {
    expect(service).toBeDefined();
  });

  it('findAll deve lançar erro "Não implementado"', () => {
    expect(() => service.findAll()).toThrow('Não implementado');
  });
});
