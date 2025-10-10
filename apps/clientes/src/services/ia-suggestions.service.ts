import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import { CreateIaSuggestionDto } from '@/dto/create-ia-suggestion.dto';
import { UpdateIaSuggestionDto } from '@/dto/update-ia-suggestion.dto';

@Injectable()
export class IaSuggestionsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateIaSuggestionDto) {
    return this.prisma.iaSuggestion.create({ data: dto });
  }

  findAll() {
    return this.prisma.iaSuggestion.findMany();
  }

  findOne(id: string) {
    return this.prisma.iaSuggestion.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateIaSuggestionDto) {
    return this.prisma.iaSuggestion.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.iaSuggestion.delete({ where: { id } });
  }
}
