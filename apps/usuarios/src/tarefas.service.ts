import { Injectable } from '@nestjs/common';
import { CreateTarefaDto, StatusTarefa } from '@/dto/create-tarefa.dto';
import { UpdateTarefaDto } from '@/dto/update-tarefa.dto';

interface Tarefa {
  id: string;
  titulo: string;
  descricao?: string;
  status: StatusTarefa;
  dataCriacao: Date;
  dataLimite?: Date;
  dataConclusao?: Date;
  clienteId?: string;
  empresaId?: string;
  leadId?: string;
  responsavelId?: string;
}

@Injectable()
export class TarefasService {
  private tarefas: Tarefa[] = [];

  create(createTarefaDto: CreateTarefaDto) {
    const tarefa: Tarefa = {
      id: (this.tarefas.length + 1).toString(),
      ...createTarefaDto,
      status: createTarefaDto.status || StatusTarefa.PENDENTE,
      dataCriacao: new Date(),
      dataLimite: createTarefaDto.dataLimite ? new Date(createTarefaDto.dataLimite) : undefined,
      dataConclusao: undefined,
    };
    this.tarefas.push(tarefa);
    return tarefa;
  }

  findAll() {
    return this.tarefas;
  }

  findOne(id: string) {
    return this.tarefas.find((t) => t.id === id);
  }

  update(id: string, updateTarefaDto: UpdateTarefaDto) {
    const tarefa = this.findOne(id);
    if (!tarefa) return null;
    Object.assign(tarefa, updateTarefaDto);
    if (updateTarefaDto.dataLimite) tarefa.dataLimite = new Date(updateTarefaDto.dataLimite);
    if (updateTarefaDto.dataConclusao) tarefa.dataConclusao = new Date(updateTarefaDto.dataConclusao);
    return tarefa;
  }

  remove(id: string) {
    const index = this.tarefas.findIndex((t) => t.id === id);
    if (index === -1) return null;
    const [removed] = this.tarefas.splice(index, 1);
    return removed;
  }
}
