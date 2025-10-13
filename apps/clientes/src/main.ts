import * as dotenv from 'dotenv';
import { resolve } from 'path';
// Carrega variáveis locais antes de executar o bootstrap do OpenTelemetry
dotenv.config({ path: resolve(__dirname, '../.env.local') });
// executar o bootstrap após garantir que as envs estejam carregadas
void require('./otel-bootstrap');

// Log inicial com PID e handlers para capturar erros não tratados
// Ajuda a diagnosticar crashes logo após o bootstrap
// eslint-disable-next-line no-console
console.log(`Clientes starting, PID=${process.pid}, NODE_ENV=${process.env.NODE_ENV ?? 'undefined'}`);
process.on('uncaughtException', (err) => {
  // eslint-disable-next-line no-console
  console.error('uncaughtException:', err && err.stack ? err.stack : err);
  // manter o log flush e então sair
  setTimeout(() => process.exit(1), 1000);
});
process.on('unhandledRejection', (reason) => {
  // eslint-disable-next-line no-console
  console.error('unhandledRejection:', reason);
  setTimeout(() => process.exit(1), 1000);
});

process.on('beforeExit', (code) => {
  // eslint-disable-next-line no-console
  console.log('process.beforeExit, code=', code);
});

process.on('exit', (code) => {
  // eslint-disable-next-line no-console
  console.log('process.exit, code=', code);
});
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
 * O serviço de clientes será iniciado na porta definida em PORT ou 3002.
 */
async function bootstrap() {
  if (!process.env.JWT_SECRET) {
    Logger.error('FATAL: JWT_SECRET não definido nas variáveis de ambiente.');
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
    .setTitle('API Clientes - visao360-plus CRM')
    .setDescription('Documentação automática dos endpoints REST')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // Fallback robusto: garantir endpoint /health disponível independentemente de controllers
  try {
    // tentar registrar via httpAdapter (Express-like)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const httpAdapter: any = app.getHttpAdapter ? app.getHttpAdapter() : undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const server: any = app.getHttpServer ? app.getHttpServer() : undefined;

    if (httpAdapter && typeof httpAdapter.get === 'function') {
      httpAdapter.get('/health', (req: any, res: any) => {
        res.status(200).json({ status: 'ok' });
      });
    }
    else if (server && typeof server.get === 'function') {
      // plain http server with express-like API
      server.get('/health', (req: any, res: any) => {
        res.status(200).json({ status: 'ok' });
      });
    }
    else if (server && typeof server.route === 'function') {
      // likely Fastify instance
      try {
        server.route({
          method: 'GET',
          url: '/health',
          handler: (request: any, reply: any) => {
            return reply.code(200).send({ status: 'ok' });
          },
        });
      }
      catch (e) {
        // ignore route registration errors
      }
    }
  }
  catch (e) {
    // eslint-disable-next-line no-console
    console.warn('Could not register fallback /health route:', e);
  }

  const port = Number(process.env.PORT) || 3002;
  await app.listen(port, '0.0.0.0');
  // eslint-disable-next-line no-console
  console.log(`Clientes listening on http://0.0.0.0:${port}`);
}
bootstrap();
