import { Injectable } from '@nestjs/common';

@Injectable()
export class ComunicacaoService {
  findAll() {
    return [{ id: 1, canal: 'WhatsApp', mensagem: 'Exemplo de mensagem' }];
  }
}
