import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '@/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; senha: string }) {
    const token = await this.authService.login(body.email, body.senha);
    if (!token) throw new UnauthorizedException('Credenciais inválidas');
    return { access_token: token };
  }
}
