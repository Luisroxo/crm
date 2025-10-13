import { Module } from '@nestjs/common';
import { ComunicacaoController } from './comunicacao.controller';
import { ComunicacaoService } from './comunicacao.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.local',
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        DATABASE_URL: Joi.string().required(),
        PORT: Joi.number().default(3005),
      }),
    }),
  ],
  controllers: [ComunicacaoController],
  providers: [ComunicacaoService],
})
export class AppModule {}
