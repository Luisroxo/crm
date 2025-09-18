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
import { IaSuggestionsController } from './ia-suggestions.controller';
import { IaSuggestionsService } from './ia-suggestions.service';
import { IaAutoRepliesController } from './ia-auto-replies.controller';
import { IaAutoRepliesService } from './ia-auto-replies.service';
import { IaProfileCompletionsController } from './ia-profile-completions.controller';
import { IaProfileCompletionsService } from './ia-profile-completions.service';
import { WebhooksController } from './webhooks.controller';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

/**
 * Módulo raiz do microserviço de Clientes.
 * Aqui são registrados controllers, providers e imports necessários.
 */
@Module({
  imports: [],
  controllers: [
    EmpresasController,
    MensagensController,
    TarefasController,
    AutomationFlowsController,
    AutomationTriggersController,
    AutomationActionsController,
    IaSuggestionsController,
    IaAutoRepliesController,
    IaProfileCompletionsController,
  WebhooksController,
  AuthController,
  ],
  providers: [
    EmpresasService,
    MensagensService,
    TarefasService,
    AutomationFlowsService,
    PrismaService,
    IaSuggestionsService,
    IaAutoRepliesService,
  IaProfileCompletionsService,
  AuthService,
  ],
})
export class AppModule {}
