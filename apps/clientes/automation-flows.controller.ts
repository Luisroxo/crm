import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateAutomationFlowDto } from './dto/create-automation-flow.dto';
import { UpdateAutomationFlowDto } from './dto/update-automation-flow.dto';

@Controller('automation-flows')
export class AutomationFlowsController {
  @Post()
  create(@Body() dto: CreateAutomationFlowDto) {
    // lógica de criação
    return { message: 'Fluxo criado', dto };
  }

  @Get()
  findAll() {
    // lógica de listagem
    return { message: 'Listar fluxos' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // lógica de busca
    return { message: `Buscar fluxo ${id}` };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAutomationFlowDto) {
    // lógica de atualização
    return { message: `Atualizar fluxo ${id}`, dto };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // lógica de remoção
    return { message: `Remover fluxo ${id}` };
  }
}
