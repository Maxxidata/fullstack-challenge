import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProfessionalTypeDto } from '../dto/professional-type.dto';
import { ProfessionalType } from '../models/professional-type.entity';
import { ProfessionalTypeService } from './professional-type.service';

@ApiTags('Professional Type')
@Controller('api/professional-type')
export class ProfessionalTypeController {
  constructor(
    private readonly professionalTypeService: ProfessionalTypeService,
  ) {}

  @ApiOperation({
    description: 'Returns professional type list',
  })
  @ApiOkResponse({
    type: [ProfessionalType],
    description: 'Professional type list',
  })
  @Get()
  async list(): Promise<ProfessionalType[]> {
    return this.professionalTypeService.list();
  }

  @ApiOperation({
    description: 'Return one professional type',
  })
  @ApiOkResponse({
    type: ProfessionalType,
    description: 'One professional type',
  })
  @Get(':id')
  async getOne(
    @Param('id') id: number,
  ): Promise<ProfessionalType | NotFoundException> {
    return this.professionalTypeService.getOne(id);
  }

  @ApiOperation({
    description: 'Create a professional type',
  })
  @ApiBody({
    type: ProfessionalType,
  })
  @ApiOkResponse({
    type: ProfessionalType || NotFoundException,
    description: 'Create professional type',
  })
  @Post()
  async create(@Body() params: ProfessionalTypeDto): Promise<ProfessionalType> {
    return this.professionalTypeService.create(params);
  }

  @ApiOperation({
    description: 'Update a professional type',
  })
  @ApiBody({
    type: ProfessionalType,
  })
  @ApiOkResponse({
    type: ProfessionalType || NotFoundException,
    description: 'Update professional type',
  })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() params: ProfessionalTypeDto,
  ): Promise<ProfessionalType | NotFoundException> {
    return this.professionalTypeService.update(id, params);
  }

  @ApiOperation({
    description: 'Delete a professional type',
  })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean | NotFoundException> {
    return this.professionalTypeService.delete(id);
  }
}
