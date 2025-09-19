import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

/**
 * Service de Clientes - pronto para integração com banco de dados.
 *
 * ATENÇÃO: Implemente os métodos usando ORM (ex: Prisma) ou outro acesso a dados.
 */
@Injectable()
export class ClientesService {
  // Implemente os métodos abaixo usando banco de dados real

  create(createClienteDto: CreateClienteDto) {
    throw new Error('Não implementado: integrar com banco de dados');
  }

  findAll() {
    throw new Error('Não implementado: integrar com banco de dados');
  }

  findOne(id: number) {
    throw new Error('Não implementado: integrar com banco de dados');
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    throw new Error('Não implementado: integrar com banco de dados');
  }

  remove(id: number) {
    throw new Error('Não implementado: integrar com banco de dados');
  }
}
