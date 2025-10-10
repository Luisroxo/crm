import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import { CreateIaProfileCompletionDto } from '@/dto/create-ia-profile-completion.dto';
import { UpdateIaProfileCompletionDto } from '@/dto/update-ia-profile-completion.dto';

@Injectable()
export class IaProfileCompletionsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateIaProfileCompletionDto) {
    return this.prisma.iaProfileCompletion.create({ data: { profile: dto.campo } });
  }

  findAll() {
    return this.prisma.iaProfileCompletion.findMany();
  }

  findOne(id: string) {
    return this.prisma.iaProfileCompletion.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateIaProfileCompletionDto) {
    return this.prisma.iaProfileCompletion.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.iaProfileCompletion.delete({ where: { id } });
  }
}
