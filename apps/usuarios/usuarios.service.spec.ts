import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosService } from './usuarios.service';
import { PrismaService } from './prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

const usuarioBase = {
  nome: 'Usuário Teste',
  email: 'teste@exemplo.com',
  senha: 'senha123',
};

describe('UsuariosService', () => {
  let service: UsuariosService;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosService, PrismaService],
    }).compile();
    service = module.get<UsuariosService>(UsuariosService);
    prisma = module.get<PrismaService>(PrismaService);
    await prisma.user.deleteMany({});
  });

  afterAll(async () => {
    await prisma.user.deleteMany({});
    await prisma.$disconnect();
  });

  it('deve criar um usuário', async () => {
    const dto: CreateUsuarioDto = { ...usuarioBase };
    const usuario = await service.create(dto);
    expect(usuario).toHaveProperty('id');
    expect(usuario.email).toBe(dto.email);
    expect(usuario.nome).toBe(dto.nome);
    expect(usuario).not.toHaveProperty('senha');
  });

  it('deve buscar todos os usuários', async () => {
    const usuarios = await service.findAll();
    expect(Array.isArray(usuarios)).toBe(true);
    expect(usuarios.length).toBeGreaterThan(0);
  });

  it('deve buscar um usuário por id', async () => {
    const [primeiro] = await service.findAll();
    const usuario = await service.findOne(primeiro.id);
    expect(usuario).toBeDefined();
    expect(usuario?.id).toBe(primeiro.id);
  });

  it('deve atualizar um usuário', async () => {
    const [primeiro] = await service.findAll();
    const dto: UpdateUsuarioDto = { nome: 'Novo Nome' };
    const usuario = await service.update(primeiro.id, dto);
    expect(usuario.nome).toBe('Novo Nome');
  });

  it('deve remover um usuário', async () => {
    const [primeiro] = await service.findAll();
    const usuario = await service.remove(primeiro.id);
    expect(usuario.id).toBe(primeiro.id);
    const buscado = await service.findOne(primeiro.id);
    expect(buscado).toBeNull();
  });
});
