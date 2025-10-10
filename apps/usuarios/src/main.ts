import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import helmet from 'helmet';

/**
 * Função principal que inicializa a aplicação NestJS.
 * O serviço de clientes será iniciado na porta definida em PORT ou 3002.
 */
async function bootstrap() {
  if (!process.env.JWT_SECRET) {
    // eslint-disable-next-line no-console
    console.error('FATAL: JWT_SECRET não definido nas variáveis de ambiente.');
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
  app.enableCors({
    origin: [/localhost/, /127.0.0.1/],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });
  app.use(helmet());
  await app.listen(process.env.PORT || 3002);
}
bootstrap();
