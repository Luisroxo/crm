import { Module } from '@nestjs/common';
import { EmpresasController } from './empresas.controller';
import { EmpresasService } from './empresas.service';
import { MensagensController } from './mensagens.controller';
import { MensagensService } from './mensagens.service';
import { TarefasController } from './tarefas.controller';
import { TarefasService } from './tarefas.service';
import { AutomationFlowsController } from './automation-flows.controller';
import { AutomationFlowsService } from './automation-flows.service';
import { PrismaService } from './prisma.service';
import { AutomationTriggersController } from './automation-triggers.controller';
import { AutomationActionsController } from './automation-actions.controller';

/**
 * Módulo raiz do microserviço de Clientes.
 * Aqui são registrados controllers, providers e imports necessários.
 */
@Module({
  imports: [],
  controllers: [EmpresasController, MensagensController, TarefasController, AutomationFlowsController, AutomationTriggersController, AutomationActionsController],
  providers: [EmpresasService, MensagensService, TarefasService, AutomationFlowsService, PrismaService],
})
export class AppModule {}
