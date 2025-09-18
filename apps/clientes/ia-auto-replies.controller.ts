import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateIaAutoReplyDto } from './dto/create-ia-auto-reply.dto';
import { UpdateIaAutoReplyDto } from './dto/update-ia-auto-reply.dto';

@Controller('ia-auto-replies')
export class IaAutoRepliesController {
  @Post()
  create(@Body() dto: CreateIaAutoReplyDto) {
    // lógica de criação
    return { message: 'Resposta automática criada', dto };
  }

  @Get()
  findAll() {
    // lógica de listagem
    return { message: 'Listar respostas automáticas' };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // lógica de busca
    return { message: `Buscar resposta automática ${id}` };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateIaAutoReplyDto) {
    // lógica de atualização
    return { message: `Atualizar resposta automática ${id}`, dto };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // lógica de remoção
    return { message: `Remover resposta automática ${id}` };
  }
}
