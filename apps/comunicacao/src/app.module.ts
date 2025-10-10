import { Module } from '@nestjs/common';
import { AuthModule } from '@crm/auth';
import { ComunicacaoController } from './comunicacao.controller';
import { ComunicacaoService } from './comunicacao.service';

@Module({
  imports: [AuthModule],
  controllers: [ComunicacaoController],
  providers: [ComunicacaoService],
})
export class AppModule {}
