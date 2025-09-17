import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Função principal que inicializa a aplicação NestJS.
 * O serviço de clientes será iniciado na porta definida em PORT ou 3002.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3002);
}
bootstrap();
