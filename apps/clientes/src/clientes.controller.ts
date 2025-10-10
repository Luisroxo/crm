import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ClientesService } from '@/services/clientes.service';
import { CreateClienteDto } from '@/dto/create-cliente.dto';
import { UpdateClienteDto } from '@/dto/update-cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientesService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.update(Number(id), updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientesService.remove(Number(id));
  }
}
