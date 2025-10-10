import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import { CreateClienteDto } from '@/dto/create-cliente.dto';
import { UpdateClienteDto } from '@/dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createClienteDto: CreateClienteDto) {
    return this.prisma.user.create({
      data: {
        nome: createClienteDto.nome,
        email: createClienteDto.email,
        senha: 'senhaFake123', // Para testes, pois senha é obrigatória no model
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: string, updateClienteDto: UpdateClienteDto) {
    return this.prisma.user.update({
      where: { id },
      data: {
        nome: updateClienteDto.nome,
        email: updateClienteDto.email,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
