import { IsString, IsOptional, IsEnum } from 'class-validator';

export enum Canal {
  WHATSAPP = 'WHATSAPP',
  INSTAGRAM = 'INSTAGRAM',
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  OUTRO = 'OUTRO',
}

export class CreateMensagemDto {
  @IsString()
  conteudo!: string;

  @IsEnum(Canal)
  canal!: Canal;

  @IsOptional()
  @IsString()
  remetente?: string;

  @IsOptional()
  @IsString()
  destinatario?: string;

  @IsOptional()
  @IsString()
  clienteId?: string;

  @IsOptional()
  @IsString()
  empresaId?: string;

  @IsOptional()
  @IsString()
  leadId?: string;
}
