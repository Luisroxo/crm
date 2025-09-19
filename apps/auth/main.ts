import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

async function bootstrap() {
  if (!process.env.JWT_SECRET) {
    // eslint-disable-next-line no-console
    console.error('FATAL: JWT_SECRET não definido nas variáveis de ambiente.');
    process.exit(1);
  }
  const app = await NestFactory.create(AppModule);
  // CORS restritivo (ajuste origin para o domínio do frontend em produção)
  app.enableCors({
    origin: [/localhost/, /127.0.0.1/],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });
  // Headers de segurança
  app.use(helmet());
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutos
      max: 100, // Limite de 100 requisições por IP
      message: 'Muitas requisições deste IP, tente novamente mais tarde.',
      standardHeaders: true,
      legacyHeaders: false,
    })
  );
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
