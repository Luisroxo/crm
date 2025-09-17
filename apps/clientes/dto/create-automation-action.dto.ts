import { IsString, IsOptional, IsEnum } from 'class-validator';

export enum ActionType {
  ENVIAR_MENSAGEM = 'ENVIAR_MENSAGEM',
  CRIAR_TAREFA = 'CRIAR_TAREFA',
  MOVER_LEAD = 'MOVER_LEAD',
  NOTIFICAR_USUARIO = 'NOTIFICAR_USUARIO',
  CUSTOM = 'CUSTOM',
}

export class CreateAutomationActionDto {
  @IsEnum(ActionType)
  tipo: ActionType;

  @IsOptional()
  parametros?: any;
}
