import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { UpdateClienteDto } from '../dto/update-cliente.dto';

/**
 * Service de Clientes - pronto para integração com banco de dados.
 *
 * ATENÇÃO: Implemente os métodos usando ORM (ex: Prisma) ou outro acesso a dados.
 */
@Injectable()
export class ClientesService {
  private clientes: any[] = [];
  private idSeq = 1;

  create(createClienteDto: CreateClienteDto) {
    const cliente = { id: this.idSeq++, ...createClienteDto };
    this.clientes.push(cliente);
    return cliente;
  }

  findAll() {
    return this.clientes;
  }

  findOne(id: number) {
    return this.clientes.find(c => c.id === Number(id));
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    const cliente = this.findOne(id);
    if (!cliente) return null;
    Object.assign(cliente, updateClienteDto);
    return cliente;
  }

  remove(id: number) {
    const idx = this.clientes.findIndex(c => c.id === Number(id));
    if (idx === -1) return null;
    const [removido] = this.clientes.splice(idx, 1);
    return removido;
  }
}
