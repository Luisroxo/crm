/**
 * DTO para criação de um novo cliente.
 * Define os campos obrigatórios e opcionais para cadastro.
 */
export class CreateClienteDto {
  /** Nome completo do cliente */
  nome: string;
  /** E-mail do cliente */
  email: string;
  /** Telefone do cliente (opcional) */
  telefone?: string;
  /** Endereço do cliente (opcional) */
  endereco?: string;
}
