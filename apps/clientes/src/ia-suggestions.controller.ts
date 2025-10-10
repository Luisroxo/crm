import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateIaSuggestionDto } from './dto/create-ia-suggestion.dto';
import { UpdateIaSuggestionDto } from './dto/update-ia-suggestion.dto';

@Controller('ia-suggestions')
export class IaSuggestionsController {
  @Post()
  create(@Body() dto: CreateIaSuggestionDto) {
    // lógica de criação
    return { message: 'Sugestão criada', dto };
  }

  @Get()
  findAll() {
    // lógica de listagem
    return { message: 'Listar sugestões' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // lógica de busca
    return { message: `Buscar sugestão ${id}` };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateIaSuggestionDto) {
    // lógica de atualização
    return { message: `Atualizar sugestão ${id}`, dto };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // lógica de remoção
    return { message: `Remover sugestão ${id}` };
  }
}
