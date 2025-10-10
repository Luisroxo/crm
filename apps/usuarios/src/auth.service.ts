import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

// Simulação de usuários em memória
const usuarios = [
  {
    id: '1',
    email: 'admin@crm.com',
    senhaHash: bcrypt.hashSync('admin123', 10),
    perfil: 'admin',
    escopos: ['read', 'write', 'admin'],
  },
  {
    id: '2',
    email: 'user@crm.com',
    senhaHash: bcrypt.hashSync('user123', 10),
    perfil: 'usuario',
    escopos: ['read', 'write'],
  },
];

const JWT_SECRET = process.env.JWT_SECRET || 'changeme_secret'; // Em produção, defina JWT_SECRET no ambiente

@Injectable()
export class AuthService {
  async login(email: string, senha: string): Promise<string | null> {
    const user = usuarios.find(u => u.email === email);
    if (!user) return null;
    const ok = await bcrypt.compare(senha, user.senhaHash);
    if (!ok) return null;
    // Gera JWT com claims de perfil e escopos
    const token = jwt.sign(
      {
        sub: user.id,
        email: user.email,
        perfil: user.perfil,
        escopos: user.escopos,
      },
      JWT_SECRET,
      { expiresIn: '2h' }
    );
    return token;
  }
}
