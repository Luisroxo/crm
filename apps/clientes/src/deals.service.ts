import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateDealDto, UpdateDealDto } from './deals.dto';

@Injectable()
export class DealsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateDealDto) {
    return this.prisma.deal.create({ data });
  }

  findAll() {
    return this.prisma.deal.findMany({
      include: {
        funil: true,
        etapa: true,
        cliente: true,
        empresa: true,
        lead: true,
        responsavel: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.deal.findUnique({
      where: { id },
      include: {
        funil: true,
        etapa: true,
        cliente: true,
        empresa: true,
        lead: true,
        responsavel: true,
      },
    });
  }

  update(id: string, data: UpdateDealDto) {
    return this.prisma.deal.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.deal.delete({ where: { id } });
  }
}
