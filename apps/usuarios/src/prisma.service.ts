import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

function findPrismaClient(dir: string, clientFolderName = 'client-usuarios') {
	let current = dir;
	for (let i = 0; i < 6; i++) {
		const candidate = path.join(current, 'node_modules', '.prisma', clientFolderName);
		if (fs.existsSync(candidate)) return candidate;
		const parent = path.dirname(current);
		if (parent === current) break;
		current = parent;
	}
	return null;
}

const prismaPath = findPrismaClient(__dirname) || findPrismaClient(process.cwd());
if (!prismaPath) {
	throw new Error('Prisma client not found: ensure `prisma generate` was run and client is under node_modules/.prisma');
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require(prismaPath);

@Injectable()
export class PrismaService extends PrismaClient {}
