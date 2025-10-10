import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { JwtAuthGuard, RolesGuard, Roles } from '@crm/auth';

@Controller('tarefas')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Get()
  @Roles('admin', 'user')
  findAll() {
    return this.tarefasService.findAll();
  }

  @Post()
  @Roles('admin')
  create(@Body() tarefa: any) {
    return this.tarefasService.create(tarefa);
  }

  @Get('/health')
  health() {
    return { status: 'ok' };
  }
}
