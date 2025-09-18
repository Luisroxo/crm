import { Injectable } from '@nestjs/common';

@Injectable()
export class TarefasService {
  private tarefas = [
    { id: 1, titulo: 'Tarefa Exemplo', status: 'Pendente' }
  ];

  findAll() {
    return this.tarefas;
  }

  create(tarefa: any) {
    const nova = {
      id: this.tarefas.length + 1,
      ...tarefa
    };
    this.tarefas.push(nova);
    return nova;
  }
}
