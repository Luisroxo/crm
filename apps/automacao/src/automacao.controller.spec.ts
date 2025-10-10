import { Test, TestingModule } from '@nestjs/testing';
import { AutomacaoController } from '@/automacao.controller';
import { AutomacaoService } from '@/automacao.service';

describe('AutomacaoController', () => {
  let controller: AutomacaoController;
  let service: AutomacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutomacaoController],
      providers: [AutomacaoService],
    }).compile();
    controller = module.get<AutomacaoController>(AutomacaoController);
    service = module.get<AutomacaoService>(AutomacaoService);
  });

  it('deve retornar status do serviço', () => {
    const result = controller.getStatus();
    expect(result).toHaveProperty('status', 'ok');
    expect(result).toHaveProperty('service', 'automacao');
    expect(result).toHaveProperty('timestamp');
  });
});
