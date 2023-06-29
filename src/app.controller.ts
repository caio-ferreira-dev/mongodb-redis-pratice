import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DatabaseService } from './database/database.service';
import { IdDTO } from './dto/id-data.dto';
import { ApiTags } from '@nestjs/swagger';
import { DataDTO } from './dto/data.dto';
import { UpdateDataDTO } from './dto/update-data.dto';

@ApiTags('Basic CRUD')
@Controller()
export class AppController {
  constructor(
    private readonly databaseService: DatabaseService
  ) {}

  @Get()
  findAllData(): any {
    return this.databaseService.getAllData();
  }

  @Get(':id')
  findDataById(@Param() {id} : IdDTO) {
    return this.databaseService.getById(id);
  }

  @Post()
  saveData(@Body() data : DataDTO) {
    return this.databaseService.saveData(data);
  }

  @Patch()
  updateData(@Body() {id, data} : UpdateDataDTO) {
    return this.databaseService.updateData(id, data);
  }

  @Delete(':id')
  deleteData(@Param() {id} : IdDTO) {
    return this.databaseService.deleteData(id);
  }
}
