import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
// import { AuthModule } from '@crm/auth'; // Removido: não existe AuthModule em packages/auth
import { VendasController } from './vendas.controller';
import { VendasService } from './vendas.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.local',
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        DATABASE_URL: Joi.string().uri().required(),
        PORT: Joi.number().default(3003),
      }),
    }),
  ],
  // imports: [AuthModule],
  controllers: [VendasController],
  providers: [VendasService],
})
export class AppModule {}
