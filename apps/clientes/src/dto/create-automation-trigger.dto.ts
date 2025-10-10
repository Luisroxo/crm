import { IsString, IsOptional, IsEnum } from 'class-validator';

export enum TriggerType {
  NOVO_LEAD = 'NOVO_LEAD',
  MUDANCA_ETAPA = 'MUDANCA_ETAPA',
  NOVA_MENSAGEM = 'NOVA_MENSAGEM',
  TAREFA_CONCLUIDA = 'TAREFA_CONCLUIDA',
  CUSTOM = 'CUSTOM',
}

export class CreateAutomationTriggerDto {
  @IsEnum(TriggerType)
  tipo!: TriggerType;

  @IsOptional()
  parametros?: any;
}
