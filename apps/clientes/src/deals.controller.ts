import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { DealsService } from './deals.service';
import { CreateDealDto, UpdateDealDto } from './deals.dto';

@Controller('deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Post()
  create(@Body() dto: CreateDealDto) {
    return this.dealsService.create(dto);
  }

  @Get()
  findAll() {
    return this.dealsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dealsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDealDto) {
    return this.dealsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dealsService.remove(id);
  }
}
