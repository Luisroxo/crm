import { IsString, IsOptional, IsEmail, Length } from 'class-validator';

export class UpdateEmpresaDto {
  @IsOptional()
  @IsString()
  @Length(3, 100)
  razaoSocial?: string;

  @IsOptional()
  @IsString()
  @Length(3, 100)
  nomeFantasia?: string;

  @IsOptional()
  @IsString()
  cnpj?: string;

  @IsOptional()
  @IsString()
  inscricaoEstadual?: string;

  @IsOptional()
  @IsString()
  telefone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  endereco?: string;
}
