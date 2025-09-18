import { Controller, Get } from '@nestjs/common';
import { VendasService } from './vendas.service';

@Controller('vendas')
export class VendasController {
  constructor(private readonly vendasService: VendasService) {}

  @Get()
  findAll() {
    return this.vendasService.findAll();
  }
}
