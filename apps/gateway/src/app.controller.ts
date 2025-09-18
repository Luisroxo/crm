import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  getStatus(): { status: string } {
    return { status: 'API Gateway rodando!' };
  }

  @Get('clientes')
  async proxyClientes() {
    try {
      const response: any = await firstValueFrom(
        this.httpService.get('http://localhost:3001/clientes'),
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Erro ao consultar microserviço de clientes',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}
