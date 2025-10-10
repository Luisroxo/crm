import { Module } from '@nestjs/common';
import { AuthModule } from '@crm/auth';
import { TarefasController } from './tarefas.controller';
import { TarefasService } from './tarefas.service';

@Module({
  imports: [AuthModule],
  controllers: [TarefasController],
  providers: [TarefasService],
})
export class AppModule {}
