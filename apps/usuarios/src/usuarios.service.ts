import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import { User } from '../../node_modules/.prisma/client-usuarios';
import { CreateUsuarioDto } from '@/dto/create-usuario.dto';
import { UpdateUsuarioDto } from '@/dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUsuarioDto) {
    const existe = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (existe) throw new BadRequestException('E-mail já cadastrado');
    const hash = await bcrypt.hash(dto.senha, 10);
    const usuario = await this.prisma.user.create({ data: { ...dto, senha: hash } });
    return this.omitSenha(usuario);
  }

  async findAll() {
    const usuarios = await this.prisma.user.findMany();
    return usuarios.map(u => this.omitSenha(u));
  }

  async findOne(id: string) {
    const usuario = await this.prisma.user.findUnique({ where: { id } });
    if (!usuario) return null;
    return this.omitSenha(usuario);
  }

  async update(id: string, dto: UpdateUsuarioDto) {
    if (dto.senha) {
      dto.senha = await bcrypt.hash(dto.senha, 10);
    }
    const usuario = await this.prisma.user.update({ where: { id }, data: dto });
    return this.omitSenha(usuario);
  }

  async remove(id: string) {
    const usuario = await this.prisma.user.delete({ where: { id } });
    return this.omitSenha(usuario);
  }

  async validarLogin(email: string, senha: string) {
    const usuario = await this.prisma.user.findUnique({ where: { email } });
    if (!usuario) return null;
    const ok = await bcrypt.compare(senha, usuario.senha);
    if (!ok) return null;
    return this.omitSenha(usuario);
  }

  private omitSenha(usuario: User) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { senha, ...rest } = usuario;
    return rest;
  }
}
