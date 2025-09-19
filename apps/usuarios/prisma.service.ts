import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../node_modules/.prisma/client-usuarios';

@Injectable()
export class PrismaService extends PrismaClient {}
