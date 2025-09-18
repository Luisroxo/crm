import { Controller, Get } from '@nestjs/common';
import { AutomacaoService } from './automacao.service';

@Controller('automacao')
export class AutomacaoController {
  constructor(private readonly automacaoService: AutomacaoService) {}

  @Get()
  findAll() {
    return this.automacaoService.findAll();
  }
}
