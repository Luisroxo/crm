import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  nome!: string;

  @IsEmail()
  email!: string;

  @MinLength(6)
  senha!: string;

  @IsOptional()
  avatar?: string;

  @IsOptional()
  cargo?: string;
}
