import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import { CreateAutomationTriggerDto } from '@/dto/create-automation-trigger.dto';
import { UpdateAutomationTriggerDto } from '@/dto/update-automation-trigger.dto';

@Injectable()
export class AutomationTriggersService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateAutomationTriggerDto) {
    // Implementação fake para padronização
    return { message: 'Trigger criada', dto };
  }

  findAll() {
    return { message: 'Listar triggers' };
  }

  findOne(id: string) {
    return { message: 'Buscar trigger', id };
  }

  update(id: string, dto: UpdateAutomationTriggerDto) {
    return { message: 'Atualizar trigger', id, dto };
  }

  remove(id: string) {
    return { message: 'Remover trigger', id };
  }
}
