import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProfessionalTypeDto } from '../dto/professional-type.dto';
import { ProfessionalType } from '../models/professional-type.entity';
import { ProfessionalTypeService } from './professional-type.service';

@Controller('professional-type')
export class ProfessionalTypeController {
  constructor(
    private readonly professionalTypeService: ProfessionalTypeService,
  ) {}

  @Get()
  async list(): Promise<ProfessionalType[]> {
    return this.professionalTypeService.list();
  }

  @Get(':id')
  async getOne(
    @Param('id') id: number,
  ): Promise<ProfessionalType | BadRequestException> {
    return this.professionalTypeService.getOne(id);
  }

  @Post()
  async create(@Body() params: ProfessionalTypeDto): Promise<ProfessionalType> {
    return this.professionalTypeService.create(params);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() params: ProfessionalTypeDto,
  ): Promise<ProfessionalType | BadRequestException> {
    return this.professionalTypeService.update(id, params);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void | BadRequestException> {
    return this.professionalTypeService.delete(id);
  }
}
