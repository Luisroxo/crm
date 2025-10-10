import { IsString, IsOptional, IsEnum, IsDateString } from 'class-validator';
import { StatusTarefa } from '@/dto/create-tarefa.dto';

export class UpdateTarefaDto {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsEnum(StatusTarefa)
  status?: StatusTarefa;

  @IsOptional()
  @IsDateString()
  dataLimite?: string;

  @IsOptional()
  @IsDateString()
  dataConclusao?: string;

  @IsOptional()
  @IsString()
  clienteId?: string;

  @IsOptional()
  @IsString()
  empresaId?: string;

  @IsOptional()
  @IsString()
  leadId?: string;

  @IsOptional()
  @IsString()
  responsavelId?: string;
}
