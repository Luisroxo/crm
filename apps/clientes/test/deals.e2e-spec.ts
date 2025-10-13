import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';
import { JwtAuthGuard } from '@crm/auth';

describe('DealsController (e2e)', () => {
  let app: INestApplication;
  let dealId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    await app.init();
  });

  it('/deals (POST)', async () => {
    const res = await request(app.getHttpServer())
      .post('/deals')
      .send({
        titulo: 'Negócio Teste',
        funilId: 'uuid-funil',
        etapaId: 'uuid-etapa',
      });
    // Espera erro de validação por uuid fake, mas valida estrutura
    expect(res.status).toBeGreaterThanOrEqual(400);
  });

  it('/deals (GET)', async () => {
    const res = await request(app.getHttpServer()).get('/deals');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  afterAll(async () => {
    await app.close();
  });
});
