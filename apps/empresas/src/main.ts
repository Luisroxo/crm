import './otel-bootstrap';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import helmet from 'helmet';
import { AllExceptionsFilter } from '@crm/core';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * Função principal que inicializa a aplicação NestJS.
 * O serviço de empresas será iniciado na porta definida em PORT ou 3006.
 */
async function bootstrap() {
  const requiredEnvs = ['JWT_SECRET', 'DATABASE_URL', 'PORT'];
  const missing = requiredEnvs.filter((v) => !process.env[v]);
  if (missing.length > 0) {
    Logger.error(`FATAL: Variáveis obrigatórias não definidas: ${missing.join(', ')}`);
    process.exit(1);
  }
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
          ),
        }),
      ],
    }),
  });
  app.useGlobalFilters(new AllExceptionsFilter());
  app.enableCors({
    origin: [/localhost/, /127.0.0.1/],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });
  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('API Empresas - visao360-plus CRM')
    .setDescription('Documentação automática dos endpoints REST')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT || 3006);
}
bootstrap();
