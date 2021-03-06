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
import { ProfessionalDto } from './dto/professional.dto';
import { Professional } from './models/professional.entity';
import { ProfessionalService } from './professional.service';

@Controller('professional')
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) {}

  @Get()
  async list(): Promise<Professional[]> {
    return this.professionalService.list();
  }

  @Get(':id')
  async getOne(
    @Param('id') id: number,
  ): Promise<Professional | BadRequestException> {
    return this.professionalService.getOne(id);
  }

  @Post()
  async create(
    @Body() params: ProfessionalDto,
  ): Promise<Professional | BadRequestException> {
    return this.professionalService.create(params);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() params: ProfessionalDto,
  ): Promise<Professional | BadRequestException> {
    return this.professionalService.update(id, params);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void | BadRequestException> {
    return this.professionalService.delete(id);
  }
}
