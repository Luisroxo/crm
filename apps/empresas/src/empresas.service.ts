import { Injectable } from '@nestjs/common';

@Injectable()
export class EmpresasService {
  findAll() {
    return [{ id: 1, nome: 'Empresa Exemplo', cnpj: '00.000.000/0001-00' }];
  }
}
