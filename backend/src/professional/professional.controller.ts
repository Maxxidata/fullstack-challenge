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
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProfessionalDto } from './dto/professional.dto';
import { Professional } from './models/professional.entity';
import { ProfessionalService } from './professional.service';

@ApiTags('Professional')
@Controller('api/professional')
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) {}

  @ApiOperation({
    description: 'Returns professional list',
  })
  @ApiOkResponse({
    type: [Professional],
    description: 'Professional list',
  })
  @Get()
  async list(): Promise<Professional[]> {
    return this.professionalService.list();
  }

  @ApiOperation({
    description: 'Return one professional',
  })
  @ApiOkResponse({
    type: Professional,
    description: 'One professional',
  })
  @Get(':id')
  async getOne(
    @Param('id') id: number,
  ): Promise<Professional | BadRequestException> {
    return this.professionalService.getOne(id);
  }

  @ApiOperation({
    description: 'Create a professional',
  })
  @ApiBody({
    type: Professional,
  })
  @ApiOkResponse({
    type: Professional || BadRequestException,
    description: 'Create professional',
  })
  @Post()
  async create(
    @Body() params: ProfessionalDto,
  ): Promise<Professional | BadRequestException> {
    return this.professionalService.create(params);
  }

  @ApiOperation({
    description: 'Update a professional',
  })
  @ApiBody({
    type: Professional,
  })
  @ApiOkResponse({
    type: Professional || BadRequestException,
    description: 'Update professional',
  })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() params: ProfessionalDto,
  ): Promise<Professional | BadRequestException> {
    return this.professionalService.update(id, params);
  }

  @ApiOperation({
    description: 'Delete a professional',
  })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void | BadRequestException> {
    return this.professionalService.delete(id);
  }
}
