import { Module } from '@nestjs/common';
import { EmpresasController } from './empresas.controller';
import { EmpresasService } from './empresas.service';
import { MensagensController } from './mensagens.controller';
import { MensagensService } from './mensagens.service';
import { TarefasController } from './tarefas.controller';
import { TarefasService } from './tarefas.service';

/**
 * Módulo raiz do microserviço de Clientes.
 * Aqui são registrados controllers, providers e imports necessários.
 */
@Module({
  imports: [],
  controllers: [EmpresasController, MensagensController, TarefasController],
  providers: [EmpresasService, MensagensService, TarefasService],
})
export class AppModule {}
