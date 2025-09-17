/**
 * DTO para atualização dos dados de um cliente.
 * Todos os campos são opcionais e validados.
 */
import { IsString, IsEmail, IsOptional, Length } from 'class-validator';

export class UpdateClienteDto {
  /** Nome completo do cliente */
  @IsOptional()
  @IsString({ message: 'O nome deve ser uma string.' })
  @Length(3, 100, { message: 'O nome deve ter entre 3 e 100 caracteres.' })
  nome?: string;

  /** E-mail do cliente */
  @IsOptional()
  @IsEmail({}, { message: 'E-mail inválido.' })
  email?: string;

  /** Telefone do cliente (opcional) */
  @IsOptional()
  @IsString({ message: 'O telefone deve ser uma string.' })
  telefone?: string;

  /** Endereço do cliente (opcional) */
  @IsOptional()
  @IsString({ message: 'O endereço deve ser uma string.' })
  endereco?: string;
}
