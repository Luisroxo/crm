/**
 * DTO para atualização dos dados de um cliente.
 * Todos os campos são opcionais.
 */
import { IsString, IsEmail, IsOptional, Length } from 'class-validator';

export class UpdateClienteDto {
  /** Nome completo do cliente */
  @IsOptional()
  @IsString
  @Length(3, 100, { message: 'O nome deve ter entre 3 e 100 caracteres.' })
  nome?: string;

  /** E-mail do cliente */
  @IsOptional()
  @IsEmail
  email?: string;

  /** Telefone do cliente */
  @IsOptional()
  @IsString
  telefone?: string;

  /** Endereço do cliente */
  @IsOptional()
  @IsString
  endereco?: string;
}
