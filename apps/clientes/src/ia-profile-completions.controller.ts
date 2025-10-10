import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateIaProfileCompletionDto } from './dto/create-ia-profile-completion.dto';
import { UpdateIaProfileCompletionDto } from './dto/update-ia-profile-completion.dto';

@Controller('ia-profile-completions')
export class IaProfileCompletionsController {
  @Post()
  create(@Body() dto: CreateIaProfileCompletionDto) {
    // lógica de criação
    return { message: 'Preenchimento inteligente criado', dto };
  }

  @Get()
  findAll() {
    // lógica de listagem
    return { message: 'Listar preenchimentos inteligentes' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // lógica de busca
    return { message: `Buscar preenchimento inteligente ${id}` };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateIaProfileCompletionDto) {
    // lógica de atualização
    return { message: `Atualizar preenchimento inteligente ${id}`, dto };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // lógica de remoção
    return { message: `Remover preenchimento inteligente ${id}` };
  }
}
