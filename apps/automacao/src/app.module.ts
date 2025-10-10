import { Module } from '@nestjs/common';
import { AutomacaoController } from '@/automacao.controller';
import { AutomacaoService } from '@/automacao.service';
import { AuthModule } from '@crm/auth';

@Module({
  imports: [AuthModule],
  controllers: [AutomacaoController],
  providers: [AutomacaoService],
})
export class AppModule {}
