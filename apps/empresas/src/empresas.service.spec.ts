import { Test, TestingModule } from '@nestjs/testing';
import { EmpresasService } from './empresas.service';

describe('EmpresasService', () => {
  let service: EmpresasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpresasService],
    }).compile();
    service = module.get<EmpresasService>(EmpresasService);
  });

  it('deve estar definido', () => {
    expect(service).toBeDefined();
  });

  it('findAll deve lançar erro "Não implementado"', () => {
    expect(() => service.findAll()).toThrow('Não implementado');
  });
});
