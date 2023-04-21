import { Controller, Get, Post, Body, Put, Delete,Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('read-mockData')
  async readMockData() {
    const response = await this.appService.readData()
    return response;
  }

  @Post('create')
  async createMockData(@Body() body) {
    const response =await this.appService.createData(body);
    return response;
  }

  @Put('edit-data')
  async editMockData(@Body() body) {
    const response = await this.appService.editData(body);
    return response
  }

  @Delete('delete-data/:id')
  async deleteMockData(@Param('id') id: number) {
    console.log('data repository',typeof id)
    const deleteId = Number(id);
    const response = await this.appService.deleteData(deleteId);
    return response
  }
}
