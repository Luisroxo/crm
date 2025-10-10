import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MensagensService } from './services/mensagens.service';
import { CreateMensagemDto } from './dto/create-mensagem.dto';
import { UpdateMensagemDto } from './dto/update-mensagem.dto';

@Controller('mensagens')
export class MensagensController {
  constructor(private readonly mensagensService: MensagensService) {}

  @Post()
  create(@Body() createMensagemDto: CreateMensagemDto) {
    return this.mensagensService.create(createMensagemDto);
  }

  @Get()
  findAll() {
    return this.mensagensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mensagensService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMensagemDto: UpdateMensagemDto) {
    return this.mensagensService.update(id, updateMensagemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mensagensService.remove(id);
  }
}
