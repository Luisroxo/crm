import './otel-bootstrap';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const replyFrom = require('@fastify/reply-from');

import { jwtAuthMiddleware } from './jwt-auth.middleware';
import client from 'prom-client';

async function bootstrap() {
  const fastifyAdapter = new FastifyAdapter({
    logger: true, // Ativa logs pino padrão do Fastify
  });

  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastifyAdapter);

  // Swagger config (após criar app)
  const config = new DocumentBuilder()
    .setTitle('API Gateway')
    .setDescription('Documentação mínima do Gateway (health, metrics)')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // Registra o plugin de proxy reverso
  await app.getHttpAdapter().getInstance().register(replyFrom, {
    http: {
      requestOptions: {
        timeout: 10000,
      },
    },
  });

  // Instância Fastify
  const fastify = app.getHttpAdapter().getInstance();

  // Endpoint /health para health check
  fastify.get('/health', async (_req: any, reply: any) => {
    reply.send({ status: 'ok', service: 'gateway', timestamp: new Date().toISOString() });
  });

  // Inicializa métricas Prometheus
  client.collectDefaultMetrics();

  // Endpoint /metrics para Prometheus
  fastify.get('/metrics', async (_req: any, reply: any) => {
    try {
      const metrics = await client.register.metrics();
      reply.header('Content-Type', client.register.contentType).send(metrics);
    } catch (err) {
      reply.code(500).send(err);
    }
  });

  // Rotas de proxy reverso
  fastify.all('/crm/*', async (req: any, reply: any) => {
    await jwtAuthMiddleware(req, reply);
    if (reply.sent) return;
    const target = 'http://localhost:3002' + req.url.replace(/^\/crm/, '');
    // @ts-ignore
    reply.from(target, {
      rewriteRequestHeaders: (_originalReq: any, headers: any) => headers,
    });
  });

  fastify.all('/bpms/*', async (req: any, reply: any) => {
    await jwtAuthMiddleware(req, reply);
    if (reply.sent) return;
    const target = 'http://localhost:3003' + req.url.replace(/^\/bpms/, '');
    // @ts-ignore
    reply.from(target, {
      rewriteRequestHeaders: (_originalReq: any, headers: any) => headers,
    });
  });

  fastify.all('/automation/*', async (req: any, reply: any) => {
    await jwtAuthMiddleware(req, reply);
    if (reply.sent) return;
    const target = 'http://localhost:3006' + req.url.replace(/^\/automation/, '');
    // @ts-ignore
    reply.from(target, {
      rewriteRequestHeaders: (_originalReq: any, headers: any) => headers,
    });
  });

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
