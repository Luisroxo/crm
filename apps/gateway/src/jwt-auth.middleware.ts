import { FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

export async function jwtAuthMiddleware(request: FastifyRequest, reply: FastifyReply) {
  const auth = request.headers['authorization'];
  if (!auth || !auth.startsWith('Bearer ')) {
    reply.code(401).send({ message: 'Token JWT ausente' });
    return;
  }
  const token = auth.replace('Bearer ', '');
  try {
    jwt.verify(token, JWT_SECRET);
    // Token válido, segue para o proxy
  } catch (err) {
    reply.code(401).send({ message: 'Token JWT inválido' });
    return;
  }
}
