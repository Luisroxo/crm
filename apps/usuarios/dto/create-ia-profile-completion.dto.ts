import { IsString, IsOptional, IsEnum } from 'class-validator';

export enum ProfileCompletionStatus {
  PENDENTE = 'PENDENTE',
  ACEITO = 'ACEITO',
  REJEITADO = 'REJEITADO',
}

export class CreateIaProfileCompletionDto {
  @IsString()
  campo!: string;

  @IsString()
  valorSugerido!: string;

  @IsOptional()
  @IsEnum(ProfileCompletionStatus)
  status?: ProfileCompletionStatus;

  @IsOptional()
  @IsString()
  usuarioId?: string;

  @IsOptional()
  @IsString()
  clienteId?: string;

  @IsOptional()
  @IsString()
  leadId?: string;

  @IsOptional()
  @IsString()
  empresaId?: string;
}
