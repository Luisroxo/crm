import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';
import { JwtAuthGuard, RolesGuard } from '@crm/auth';

describe('ClientesController (e2e)', () => {
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

  it('/clientes (GET) deve retornar array', async () => {
    const res = await request(app.getHttpServer()).get('/clientes');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('/clientes (POST) deve criar cliente', async () => {
    const cliente = { nome: 'Teste', email: 'teste@crm.com' };
    const res = await request(app.getHttpServer())
      .post('/clientes')
      .send(cliente);
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.nome).toBe(cliente.nome);
    expect(res.body.email).toBe(cliente.email);
  });
});
