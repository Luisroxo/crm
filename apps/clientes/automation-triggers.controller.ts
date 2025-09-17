import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateAutomationTriggerDto } from './dto/create-automation-trigger.dto';
import { UpdateAutomationTriggerDto } from './dto/update-automation-trigger.dto';

@Controller('automation-triggers')
export class AutomationTriggersController {
  @Post()
  create(@Body() dto: CreateAutomationTriggerDto) {
    // lógica de criação
    return { message: 'Trigger criada', dto };
  }

  @Get()
  findAll() {
    // lógica de listagem
    return { message: 'Listar triggers' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // lógica de busca
    return { message: `Buscar trigger ${id}` };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAutomationTriggerDto) {
    // lógica de atualização
    return { message: `Atualizar trigger ${id}`, dto };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // lógica de remoção
    return { message: `Remover trigger ${id}` };
  }
}
