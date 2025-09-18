import { Injectable } from '@nestjs/common';

@Injectable()
export class TarefasService {
  findAll() {
    return [{ id: 1, titulo: 'Tarefa Exemplo', status: 'Pendente' }];
  }
}
