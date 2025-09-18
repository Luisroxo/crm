import { Injectable } from '@nestjs/common';

@Injectable()
export class AutomacaoService {
  findAll() {
    return [{ id: 1, fluxo: 'Exemplo de automação', status: 'Ativo' }];
  }
}
