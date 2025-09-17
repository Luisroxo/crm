import { Module } from '@nestjs/common';
import { EmpresasController } from './empresas.controller';
import { EmpresasService } from './empresas.service';
import { MensagensController } from './mensagens.controller';
import { MensagensService } from './mensagens.service';

/**
 * Módulo raiz do microserviço de Clientes.
 * Aqui são registrados controllers, providers e imports necessários.
 */
@Module({
  imports: [],
  controllers: [EmpresasController, MensagensController],
  providers: [EmpresasService, MensagensService],
})
export class AppModule {}
