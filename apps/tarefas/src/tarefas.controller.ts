import { Controller, Get, Post, Body } from '@nestjs/common';
import { TarefasService } from './tarefas.service';

@Controller('tarefas')
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Get()
  findAll() {
    return this.tarefasService.findAll();
  }

  @Post()
  create(@Body() tarefa: any) {
    return this.tarefasService.create(tarefa);
  }

  @Get('/health')
  health() {
    return { status: 'ok' };
  }
}
