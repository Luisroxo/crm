import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers['authorization'];
    if (!authHeader) {
      throw new UnauthorizedException('Token não informado');
    }
    const [, token] = authHeader.split(' ');
    try {
      const payload = await this.jwtService.verifyAsync(token, { secret: process.env.JWT_SECRET });
  (request as any)['user'] = payload;
      return true;
    } catch (e) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
