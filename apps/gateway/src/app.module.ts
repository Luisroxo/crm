import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { HttpModule } from '@nestjs/axios';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'changeme',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class AppModule {}
