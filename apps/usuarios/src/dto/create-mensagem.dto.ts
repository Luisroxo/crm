export class CreateMensagemDto {
	conteudo!: string;
	canal!: Canal;
	dataEnvio?: Date;
}
export enum Canal {
	EMAIL = 'EMAIL',
	WHATSAPP = 'WHATSAPP',
	SMS = 'SMS',
}