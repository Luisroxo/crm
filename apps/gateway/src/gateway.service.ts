import { Injectable } from '@nestjs/common';

@Injectable()
export class GatewayService {
  status() {
    return { status: 'API Gateway rodando!' };
  }
}
