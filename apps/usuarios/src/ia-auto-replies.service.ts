import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import { CreateIaAutoReplyDto } from '@/dto/create-ia-auto-reply.dto';
import { UpdateIaAutoReplyDto } from '@/dto/update-ia-auto-reply.dto';

@Injectable()
export class IaAutoRepliesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateIaAutoReplyDto) {
    return this.prisma.iaAutoReply.create({ data: { message: dto.texto } });
  }

  findAll() {
    return this.prisma.iaAutoReply.findMany();
  }

  findOne(id: string) {
    return this.prisma.iaAutoReply.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateIaAutoReplyDto) {
    return this.prisma.iaAutoReply.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.iaAutoReply.delete({ where: { id } });
  }
}
