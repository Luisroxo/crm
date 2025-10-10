import { Module } from '@nestjs/common';
import { AuthModule } from '@crm/auth';
import { EmpresasController } from './empresas.controller';
import { EmpresasService } from './empresas.service';

@Module({
  imports: [AuthModule],
  controllers: [EmpresasController],
  providers: [EmpresasService],
})
export class AppModule {}
