import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './app.module';

describe('TarefasController (e2e)', () => {
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

  it('/tarefas (GET) deve retornar array', async () => {
    const res = await request(app.getHttpServer()).get('/tarefas');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('/tarefas (POST) deve criar tarefa', async () => {
  const tarefa = { };
    const res = await request(app.getHttpServer())
      .post('/tarefas')
      .send(tarefa);
    expect([200,201]).toContain(res.status);
    expect(res.body).toHaveProperty('id');
  });
});
