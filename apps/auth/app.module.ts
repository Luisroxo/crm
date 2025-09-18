import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './src/jwt.strategy';
import { JwtAuthGuard } from './src/jwt.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'crm_secret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtAuthGuard],
})
export class AppModule {}
