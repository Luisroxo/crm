export class CreateTarefaDto {
	titulo!: string;
	status?: StatusTarefa;
	dataCriacao?: Date;
	dataLimite?: Date;
	dataConclusao?: Date;
}
export enum StatusTarefa {
	PENDENTE = 'PENDENTE',
	CONCLUIDA = 'CONCLUIDA',
}