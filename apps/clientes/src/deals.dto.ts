import { IsString, IsOptional, IsNumber, IsEnum, IsUUID } from 'class-validator';
import { DealStatus } from '@prisma/client';

export class CreateDealDto {
  @IsString()
  titulo!: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsNumber()
  valor?: number;

  @IsOptional()
  @IsEnum(DealStatus)
  status?: DealStatus;

  @IsUUID()
  funilId!: string;

  @IsUUID()
  etapaId!: string;

  @IsOptional()
  @IsUUID()
  clienteId?: string;

  @IsOptional()
  @IsUUID()
  empresaId?: string;

  @IsOptional()
  @IsUUID()
  leadId?: string;

  @IsOptional()
  @IsUUID()
  responsavelId?: string;
}

export class UpdateDealDto extends CreateDealDto {}
