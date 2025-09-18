import { Controller, Get } from '@nestjs/common';
import { ComunicacaoService } from './comunicacao.service';

@Controller('comunicacao')
export class ComunicacaoController {
  constructor(private readonly comunicacaoService: ComunicacaoService) {}

  @Get()
  findAll() {
    return this.comunicacaoService.findAll();
  }
}
