import { Controller, Get, UseGuards } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { JwtAuthGuard, RolesGuard, Roles } from '@auth';

@Controller('empresas')
@UseGuards(JwtAuthGuard, RolesGuard)
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  @Get()
  @Roles('admin', 'user')
  findAll() {
    return this.empresasService.findAll();
  }

  @Get('/health')
  health() {
    return { status: 'ok' };
  }
}
