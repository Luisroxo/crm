/**
 * DTO para atualização dos dados de um cliente.
 * Todos os campos são opcionais.
 */
export class UpdateClienteDto {
  /** Nome completo do cliente */
  nome?: string;
  /** E-mail do cliente */
  email?: string;
  /** Telefone do cliente */
  telefone?: string;
  /** Endereço do cliente */
  endereco?: string;
}
