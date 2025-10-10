import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { WebhooksController } from '@/webhooks.controller';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';

describe('WebhooksController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [WebhooksController],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/webhooks (POST) deve registrar webhook', async () => {
    const res = await request(app.getHttpServer())
      .post('/webhooks')
      .send({ url: 'http://test.com', eventos: ['created'] });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.url).toBe('http://test.com');
    expect(res.body.eventos).toContain('created');
  });

  it('/webhooks (GET) deve listar webhooks', async () => {
    const res = await request(app.getHttpServer()).get('/webhooks');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
