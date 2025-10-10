export class UpdateUsuarioDto {
	nome?: string;
	email?: string;
	senha?: string;
	avatar?: string;
	cargo?: string;
	status?: 'ATIVO' | 'INATIVO';
}