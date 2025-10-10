import { Injectable } from '@nestjs/common';
import { CreateMensagemDto } from '@/dto/create-mensagem.dto';
import { UpdateMensagemDto } from '@/dto/update-mensagem.dto';
import { Canal } from '@/dto/create-mensagem.dto';

interface Mensagem {
  id: string;
  conteudo: string;
  canal: Canal;
  dataEnvio: Date;
  remetente?: string;
  destinatario?: string;
  clienteId?: string;
  empresaId?: string;
  leadId?: string;
}

@Injectable()
export class MensagensService {
  private mensagens: Mensagem[] = [];

  create(createMensagemDto: CreateMensagemDto) {
    const mensagem: Mensagem = {
      id: (this.mensagens.length + 1).toString(),
      ...createMensagemDto,
      dataEnvio: new Date(),
    };
    this.mensagens.push(mensagem);
    return mensagem;
  }

  findAll() {
    return this.mensagens;
  }

  findOne(id: string) {
    return this.mensagens.find((m) => m.id === id);
  }

  update(id: string, updateMensagemDto: UpdateMensagemDto) {
    const mensagem = this.findOne(id);
    if (!mensagem) return null;
    Object.assign(mensagem, updateMensagemDto);
    return mensagem;
  }

  remove(id: string) {
    const index = this.mensagens.findIndex((m) => m.id === id);
    if (index === -1) return null;
    const [removed] = this.mensagens.splice(index, 1);
    return removed;
  }
}
