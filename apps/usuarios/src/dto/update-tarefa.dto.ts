import { StatusTarefa } from './create-tarefa.dto';
export class UpdateTarefaDto {
	titulo?: string;
	status?: StatusTarefa;
	dataLimite?: Date;
	dataConclusao?: Date;
}