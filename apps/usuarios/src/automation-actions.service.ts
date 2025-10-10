import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import { CreateAutomationActionDto } from '@/dto/create-automation-action.dto';
import { UpdateAutomationActionDto } from '@/dto/update-automation-action.dto';

@Injectable()
export class AutomationActionsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateAutomationActionDto) {
    // Implementação fake para padronização
    return { message: 'Ação criada', dto };
  }

  findAll() {
    return { message: 'Listar ações' };
  }

  findOne(id: string) {
    return { message: 'Buscar ação', id };
  }

  update(id: string, dto: UpdateAutomationActionDto) {
    return { message: 'Atualizar ação', id, dto };
  }

  remove(id: string) {
    return { message: 'Remover ação', id };
  }
}
