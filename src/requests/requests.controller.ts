import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestDto, UpdateRequestDto } from './dto';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Get()
  findAll() {
    return this.requestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestsService.findOne(id);
  }

  @Post()
  create(@Body() createRequestDto: CreateRequestDto) {
    return this.requestsService.create(createRequestDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRequestDto: UpdateRequestDto) {
    return this.requestsService.update(id, updateRequestDto);
  }
}
