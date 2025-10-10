import { IsString, IsOptional } from 'class-validator';

export class CreateIaSuggestionDto {
  @IsString()
  texto!: string;

  @IsOptional()
  @IsString()
  contexto?: string;

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

  @IsOptional()
  @IsString()
  mensagemId?: string;
}
