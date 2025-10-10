import { IsString, IsOptional, IsEnum } from 'class-validator';
import { Canal } from '@/dto/create-mensagem.dto';

export class UpdateMensagemDto {
  @IsOptional()
  @IsString()
  conteudo?: string;

  @IsOptional()
  @IsEnum(Canal)
  canal?: Canal;

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
