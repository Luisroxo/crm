import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import helmet from 'helmet';
import { AllExceptionsFilter } from '@crm/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
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
    .setTitle('API Tarefas - visao360-plus CRM')
    .setDescription('Documentação automática dos endpoints REST')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3005);
}
bootstrap();
