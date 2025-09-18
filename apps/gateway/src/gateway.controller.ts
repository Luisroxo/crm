import { Controller, Get, Post, Put, Delete, Param, Body, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AuthGuard } from './auth.guard';

@UseGuards(AuthGuard)
@Controller('gateway')
export class GatewayController {
  constructor(
    private readonly gatewayService: GatewayService,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  status() {
    return this.gatewayService.status();
  }

  @Get('clientes')
  async proxyClientes() {
    return this.proxy('http://localhost:3002/clientes', 'clientes');
  }

  @Get('clientes/:id')
  async proxyClientesById(@Param('id') id: string) {
    return this.proxy(`http://localhost:3002/clientes/${id}`, 'clientes');
  }

  @Post('clientes')
  async proxyClientesPost(@Body() body: any) {
    return this.proxyWithBody('http://localhost:3002/clientes', 'clientes', 'post', body);
  }

  @Put('clientes/:id')
  async proxyClientesPut(@Param('id') id: string, @Body() body: any) {
    return this.proxyWithBody(`http://localhost:3002/clientes/${id}`, 'clientes', 'put', body);
  }

  @Delete('clientes/:id')
  async proxyClientesDelete(@Param('id') id: string) {
    return this.proxyWithBody(`http://localhost:3002/clientes/${id}`, 'clientes', 'delete');
  }

  @Get('vendas')
  async proxyVendas() {
    return this.proxy('http://localhost:3002/vendas', 'vendas');
  }
  @Get('vendas/:id')
  async proxyVendasById(@Param('id') id: string) {
    return this.proxy(`http://localhost:3002/vendas/${id}`, 'vendas');
  }
  @Post('vendas')
  async proxyVendasPost(@Body() body: any) {
    return this.proxyWithBody('http://localhost:3002/vendas', 'vendas', 'post', body);
  }
  @Put('vendas/:id')
  async proxyVendasPut(@Param('id') id: string, @Body() body: any) {
    return this.proxyWithBody(`http://localhost:3002/vendas/${id}`, 'vendas', 'put', body);
  }
  @Delete('vendas/:id')
  async proxyVendasDelete(@Param('id') id: string) {
    return this.proxyWithBody(`http://localhost:3002/vendas/${id}`, 'vendas', 'delete');
  }

  @Get('empresas')
  async proxyEmpresas() {
    return this.proxy('http://localhost:3003/empresas', 'empresas');
  }
  @Get('empresas/:id')
  async proxyEmpresasById(@Param('id') id: string) {
    return this.proxy(`http://localhost:3003/empresas/${id}`, 'empresas');
  }
  @Post('empresas')
  async proxyEmpresasPost(@Body() body: any) {
    return this.proxyWithBody('http://localhost:3003/empresas', 'empresas', 'post', body);
  }
  @Put('empresas/:id')
  async proxyEmpresasPut(@Param('id') id: string, @Body() body: any) {
    return this.proxyWithBody(`http://localhost:3003/empresas/${id}`, 'empresas', 'put', body);
  }
  @Delete('empresas/:id')
  async proxyEmpresasDelete(@Param('id') id: string) {
    return this.proxyWithBody(`http://localhost:3003/empresas/${id}`, 'empresas', 'delete');
  }

  @Get('comunicacao')
  async proxyComunicacao() {
    return this.proxy('http://localhost:3004/comunicacao', 'comunicacao');
  }
  @Get('comunicacao/:id')
  async proxyComunicacaoById(@Param('id') id: string) {
    return this.proxy(`http://localhost:3004/comunicacao/${id}`, 'comunicacao');
  }
  @Post('comunicacao')
  async proxyComunicacaoPost(@Body() body: any) {
    return this.proxyWithBody('http://localhost:3004/comunicacao', 'comunicacao', 'post', body);
  }
  @Put('comunicacao/:id')
  async proxyComunicacaoPut(@Param('id') id: string, @Body() body: any) {
    return this.proxyWithBody(`http://localhost:3004/comunicacao/${id}`, 'comunicacao', 'put', body);
  }
  @Delete('comunicacao/:id')
  async proxyComunicacaoDelete(@Param('id') id: string) {
    return this.proxyWithBody(`http://localhost:3004/comunicacao/${id}`, 'comunicacao', 'delete');
  }

  @Get('tarefas')
  async proxyTarefas() {
    return this.proxy('http://localhost:3005/tarefas', 'tarefas');
  }
  @Get('tarefas/:id')
  async proxyTarefasById(@Param('id') id: string) {
    return this.proxy(`http://localhost:3005/tarefas/${id}`, 'tarefas');
  }
  @Post('tarefas')
  async proxyTarefasPost(@Body() body: any) {
    return this.proxyWithBody('http://localhost:3005/tarefas', 'tarefas', 'post', body);
  }
  @Put('tarefas/:id')
  async proxyTarefasPut(@Param('id') id: string, @Body() body: any) {
    return this.proxyWithBody(`http://localhost:3005/tarefas/${id}`, 'tarefas', 'put', body);
  }
  @Delete('tarefas/:id')
  async proxyTarefasDelete(@Param('id') id: string) {
    return this.proxyWithBody(`http://localhost:3005/tarefas/${id}`, 'tarefas', 'delete');
  }

  @Get('automacao')
  async proxyAutomacao() {
    return this.proxy('http://localhost:3006/automacao', 'automacao');
  }
  @Get('automacao/:id')
  async proxyAutomacaoById(@Param('id') id: string) {
    return this.proxy(`http://localhost:3006/automacao/${id}`, 'automacao');
  }
  @Post('automacao')
  async proxyAutomacaoPost(@Body() body: any) {
    return this.proxyWithBody('http://localhost:3006/automacao', 'automacao', 'post', body);
  }
  @Put('automacao/:id')
  async proxyAutomacaoPut(@Param('id') id: string, @Body() body: any) {
    return this.proxyWithBody(`http://localhost:3006/automacao/${id}`, 'automacao', 'put', body);
  }
  @Delete('automacao/:id')
  async proxyAutomacaoDelete(@Param('id') id: string) {
    return this.proxyWithBody(`http://localhost:3006/automacao/${id}`, 'automacao', 'delete');
  }

  @Get('auth')
  async proxyAuth() {
    return this.proxy('http://localhost:3007/auth', 'auth');
  }

  private async proxy(url: string, label: string) {
    try {
      const response = await firstValueFrom(this.httpService.get(url));
      return response.data;
    } catch (error) {
      throw new HttpException(
        `Erro ao consultar microserviço de ${label}`,
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  private async proxyWithBody(url: string, label: string, method: 'post' | 'put' | 'delete', body?: any) {
    try {
      let response;
      if (method === 'post') {
        response = await firstValueFrom(this.httpService.post(url, body));
      } else if (method === 'put') {
        response = await firstValueFrom(this.httpService.put(url, body));
      } else if (method === 'delete') {
        response = await firstValueFrom(this.httpService.delete(url));
      } else {
        throw new Error('Método não suportado');
      }
      return response.data;
    } catch (error) {
      throw new HttpException(
        `Erro ao consultar microserviço de ${label}`,
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}
