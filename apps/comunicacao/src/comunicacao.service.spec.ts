import { Test, TestingModule } from '@nestjs/testing';
import { ComunicacaoService } from './comunicacao.service';

describe('ComunicacaoService', () => {
  let service: ComunicacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComunicacaoService],
    }).compile();
    service = module.get<ComunicacaoService>(ComunicacaoService);
  });

  it('deve estar definido', () => {
    expect(service).toBeDefined();
  });

  it('findAll deve lançar erro "Não implementado"', () => {
    expect(() => service.findAll()).toThrow('Não implementado');
  });
});
