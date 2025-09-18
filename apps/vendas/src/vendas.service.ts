import { Injectable } from '@nestjs/common';

@Injectable()
export class VendasService {
  findAll() {
    return [{ id: 1, nome: 'Lead Exemplo', etapa: 'Novo' }];
  }
}
