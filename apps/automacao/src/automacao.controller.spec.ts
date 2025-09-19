import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';

describe('AutomacaoController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/automacao (GET) deve retornar array', async () => {
    const res = await request(app.getHttpServer()).get('/automacao');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('/automacao (POST) deve criar automacao', async () => {
  const automacao = { };
    const res = await request(app.getHttpServer())
      .post('/automacao')
      .send(automacao);
    expect([200,201]).toContain(res.status);
    expect(res.body).toHaveProperty('id');
  });
});
