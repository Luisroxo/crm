import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateAutomationFlowDto } from '../dto/create-automation-flow.dto';
import { UpdateAutomationFlowDto } from '../dto/update-automation-flow.dto';

@Injectable()
export class AutomationFlowsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateAutomationFlowDto) {
    return this.prisma.automationFlow.create({ data: dto });
  }

  findAll() {
    return this.prisma.automationFlow.findMany({
      include: { triggers: true, actions: true },
    });
  }

  findOne(id: string) {
    return this.prisma.automationFlow.findUnique({
      where: { id },
      include: { triggers: true, actions: true },
    });
  }

  update(id: string, dto: UpdateAutomationFlowDto) {
    return this.prisma.automationFlow.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: string) {
    return this.prisma.automationFlow.delete({ where: { id } });
  }
}
