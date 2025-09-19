import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

/**
 * Controller responsável por expor as rotas HTTP para operações de clientes.
 * Permite criar, listar, buscar, atualizar e remover clientes.
 */
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  /**
   * Cria um novo cliente.
   * @param createClienteDto Dados para criação do cliente
   */
  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  /**
   * Lista todos os clientes cadastrados.
   */
  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  /**
   * Busca um cliente pelo ID.
   * @param id Identificador do cliente
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientesService.findOne(+id);
  }

  /**
   * Atualiza os dados de um cliente.
   * @param id Identificador do cliente
   * @param updateClienteDto Novos dados do cliente
   */
  @Put(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.update(+id, updateClienteDto);
  }

  /**
   * Remove um cliente pelo ID.
   * @param id Identificador do cliente
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientesService.remove(+id);
  }

  @Get('/health')
  health() {
    return { status: 'ok' };
  }
}
