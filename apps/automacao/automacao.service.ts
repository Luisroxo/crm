import { Injectable } from '@nestjs/common';

@Injectable()
export class AutomacaoService {
  getStatus() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'automacao',
    };
  }
}
