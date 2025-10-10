import { Module } from '@nestjs/common';
import { AuthModule } from '@crm/auth';
import { VendasController } from './vendas.controller';
import { VendasService } from './vendas.service';

@Module({
  imports: [AuthModule],
  controllers: [VendasController],
  providers: [VendasService],
})
export class AppModule {}
