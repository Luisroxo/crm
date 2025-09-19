import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../node_modules/.prisma/client-tarefas';

@Injectable()
export class PrismaService extends PrismaClient {}
