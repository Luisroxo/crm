import { Controller, Get, UseGuards } from '@nestjs/common';
import { AutomacaoService } from '@/automacao.service';
import { JwtAuthGuard, RolesGuard, Roles } from '@crm/auth';

@Controller('automacao')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AutomacaoController {
  constructor(private readonly automacaoService: AutomacaoService) {}

  @Get('status')
  @Roles('admin', 'user')
  getStatus() {
    return this.automacaoService.getStatus();
  }
}
