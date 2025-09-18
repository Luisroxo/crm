import { Controller, Post, Get, Delete, Body, Param, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';

// Simulação de armazenamento em memória para webhooks
const webhooks: { id: string; url: string; eventos: string[] }[] = [];

@UseGuards(JwtAuthGuard)
@Controller('webhooks')
export class WebhooksController {
  @Post()
  register(@Body() body: { url: string; eventos: string[] }) {
    if (!body.url || !body.eventos?.length) {
      throw new HttpException('URL e eventos são obrigatórios', HttpStatus.BAD_REQUEST);
    }
    const id = Math.random().toString(36).substring(2, 10);
    webhooks.push({ id, url: body.url, eventos: body.eventos });
    return { id, url: body.url, eventos: body.eventos };
  }

  @Get()
  list() {
    return webhooks;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const idx = webhooks.findIndex(w => w.id === id);
    if (idx === -1) throw new HttpException('Webhook não encontrado', HttpStatus.NOT_FOUND);
    webhooks.splice(idx, 1);
    return { message: 'Webhook removido', id };
  }

  @Post('testar/:id')
  test(@Param('id') id: string) {
    const webhook = webhooks.find(w => w.id === id);
    if (!webhook) throw new HttpException('Webhook não encontrado', HttpStatus.NOT_FOUND);
    // Aqui seria feito o envio real (simulado)
    return { message: 'Teste enviado para ' + webhook.url, eventos: webhook.eventos };
  }
}
