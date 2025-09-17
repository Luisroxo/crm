import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateAutomationActionDto } from './dto/create-automation-action.dto';
import { UpdateAutomationActionDto } from './dto/update-automation-action.dto';

@Controller('automation-actions')
export class AutomationActionsController {
  @Post()
  create(@Body() dto: CreateAutomationActionDto) {
    // lógica de criação
    return { message: 'Ação criada', dto };
  }

  @Get()
  findAll() {
    // lógica de listagem
    return { message: 'Listar ações' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // lógica de busca
    return { message: `Buscar ação ${id}` };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAutomationActionDto) {
    // lógica de atualização
    return { message: `Atualizar ação ${id}`, dto };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // lógica de remoção
    return { message: `Remover ação ${id}` };
  }
}
