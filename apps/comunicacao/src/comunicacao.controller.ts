import { Controller, Get, UseGuards } from '@nestjs/common';
import { ComunicacaoService } from './comunicacao.service';
import { JwtAuthGuard, RolesGuard, Roles } from '@crm/auth';

@Controller('comunicacao')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ComunicacaoController {
  constructor(private readonly comunicacaoService: ComunicacaoService) {}

  @Get()
  @Roles('admin', 'user')
  findAll() {
    return this.comunicacaoService.findAll();
  }

  @Get('/health')
  health() {
    return { status: 'ok' };
  }
}
