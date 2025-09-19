import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../node_modules/.prisma/client-vendas';

@Injectable()
export class PrismaService extends PrismaClient {}
