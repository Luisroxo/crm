import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

interface Empresa {
  id: string;
  razaoSocial: string;
  nomeFantasia?: string;
  cnpj: string;
  inscricaoEstadual?: string;
  telefone?: string;
  email?: string;
  endereco?: string;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable()
export class EmpresasService {
  private empresas: Empresa[] = [];

  create(createEmpresaDto: CreateEmpresaDto) {
    const empresa: Empresa = {
      id: (this.empresas.length + 1).toString(),
      ...createEmpresaDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.empresas.push(empresa);
    return empresa;
  }

  findAll() {
    return this.empresas;
  }

  findOne(id: string) {
    return this.empresas.find((e) => e.id === id);
  }

  update(id: string, updateEmpresaDto: UpdateEmpresaDto) {
    const empresa = this.findOne(id);
    if (!empresa) return null;
    Object.assign(empresa, updateEmpresaDto, { updatedAt: new Date() });
    return empresa;
  }

  remove(id: string) {
    const index = this.empresas.findIndex((e) => e.id === id);
    if (index === -1) return null;
    const [removed] = this.empresas.splice(index, 1);
    return removed;
  }
}
