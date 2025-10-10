import { Module } from '@nestjs/common';
import { AutomacaoController } from './automacao.controller';
import { AutomacaoService } from './automacao.service';

@Module({
  imports: [],
  controllers: [AutomacaoController],
  providers: [AutomacaoService],
})
export class AppModule {}
