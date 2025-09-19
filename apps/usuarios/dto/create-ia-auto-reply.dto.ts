import { IsString, IsOptional } from 'class-validator';

export class CreateIaAutoReplyDto {
  @IsString()
  texto!: string;

  @IsOptional()
  @IsString()
  contexto?: string;

  @IsString()
  mensagemId!: string;

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
