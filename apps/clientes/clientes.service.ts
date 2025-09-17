import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

/**
 * Interface que representa a estrutura de um cliente.
 */
interface Cliente {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
  endereco?: string;
}

/**
 * Service responsável pela lógica de negócio e armazenamento dos clientes em memória.
 * Em um cenário real, seria substituído por integração com banco de dados.
 */
@Injectable()
export class ClientesService {
  private clientes: Cliente[] = [];

  /**
   * Cria um novo cliente e adiciona ao array em memória.
   * @param createClienteDto Dados do novo cliente
   */
  create(createClienteDto: CreateClienteDto) {
    const id = this.clientes.length + 1;
    const cliente = { id, ...createClienteDto };
    this.clientes.push(cliente);
    return cliente;
  }

  /**
   * Retorna todos os clientes cadastrados.
   */
  findAll() {
    return this.clientes;
  }

  /**
   * Busca um cliente pelo ID.
   * @param id Identificador do cliente
   */
  findOne(id: number) {
    return this.clientes.find((c) => c.id === id);
  }

  /**
   * Atualiza os dados de um cliente existente.
   * @param id Identificador do cliente
   * @param updateClienteDto Novos dados do cliente
   */
  update(id: number, updateClienteDto: UpdateClienteDto) {
    const cliente = this.findOne(id);
    if (!cliente) return null;
    Object.assign(cliente, updateClienteDto);
    return cliente;
  }

  /**
   * Remove um cliente pelo ID.
   * @param id Identificador do cliente
   */
  remove(id: number) {
    const index = this.clientes.findIndex((c) => c.id === id);
    if (index === -1) return null;
    const [removed] = this.clientes.splice(index, 1);
    return removed;
  }
}
