import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';

describe('EmpresasController (e2e)', () => {
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

  it('/empresas (GET) deve retornar array', async () => {
    const res = await request(app.getHttpServer()).get('/empresas');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('/empresas (POST) deve criar empresa', async () => {
    const empresa = { /* campos mínimos */ };
    const res = await request(app.getHttpServer())
      .post('/empresas')
      .send(empresa);
    expect([200,201]).toContain(res.status);
    expect(res.body).toHaveProperty('id');
  });
});
