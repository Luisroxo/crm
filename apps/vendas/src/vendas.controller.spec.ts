import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';
import { JwtAuthGuard, RolesGuard } from '@crm/auth';

describe('VendasController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .overrideGuard(RolesGuard)
      .useValue({ canActivate: () => true })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/vendas (GET) deve retornar array', async () => {
    const res = await request(app.getHttpServer()).get('/vendas');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('/vendas (POST) deve criar venda', async () => {
  const venda = { };
    const res = await request(app.getHttpServer())
      .post('/vendas')
      .send(venda);
    expect([200,201]).toContain(res.status);
    expect(res.body).toHaveProperty('id');
  });
});
