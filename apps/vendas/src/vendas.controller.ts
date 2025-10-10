import { Controller, Get, UseGuards } from '@nestjs/common';
import { VendasService } from './vendas.service';
import { JwtAuthGuard, RolesGuard, Roles } from '@crm/auth';

@Controller('vendas')
@UseGuards(JwtAuthGuard, RolesGuard)
export class VendasController {
  constructor(private readonly vendasService: VendasService) {}

  @Get()
  @Roles('admin', 'user')
  findAll() {
    return this.vendasService.findAll();
  }

  @Get('/health')
  health() {
    return { status: 'ok' };
  }
}
