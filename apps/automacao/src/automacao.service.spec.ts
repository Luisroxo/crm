import { Test, TestingModule } from '@nestjs/testing';
import { AutomacaoService } from '@/automacao.service';

describe('AutomacaoService', () => {
  let service: AutomacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutomacaoService],
    }).compile();
    service = module.get<AutomacaoService>(AutomacaoService);
  });

  it('deve retornar status ok', () => {
    const result = service.getStatus();
    expect(result).toHaveProperty('status', 'ok');
    expect(result).toHaveProperty('service', 'automacao');
    expect(result).toHaveProperty('timestamp');
  });
});
