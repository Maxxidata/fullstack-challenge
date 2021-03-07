import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfessionalTypeDto } from '../dto/professional-type.dto';
import { ProfessionalType } from '../models/professional-type.entity';

@Injectable()
export class ProfessionalTypeService {
  constructor(
    @InjectRepository(ProfessionalType)
    private readonly professionalTypeRepository: Repository<ProfessionalType>,
  ) {}

  async list(): Promise<ProfessionalType[]> {
    return this.professionalTypeRepository.find();
  }

  async getOne(id: number): Promise<ProfessionalType | NotFoundException> {
    const professionalType = await this.professionalTypeRepository.findOne(id);

    if (!professionalType) {
      throw new NotFoundException('Professional type not found');
    }

    return professionalType;
  }

  async create(dto: ProfessionalTypeDto): Promise<ProfessionalType> {
    return this.professionalTypeRepository.save(dto);
  }

  async update(
    id: number,
    dto: ProfessionalTypeDto,
  ): Promise<ProfessionalType | NotFoundException> {
    const professionalType = await this.professionalTypeRepository.findOne(id);

    if (!professionalType) {
      throw new NotFoundException('Professional type not found');
    }

    const professionalTypeDto = ProfessionalTypeDto.toEntity(dto);

    professionalTypeDto.id = Number(id);

    return this.professionalTypeRepository.save(professionalTypeDto);
  }

  // eslint-disable-next-line consistent-return
  async delete(id: number): Promise<boolean | NotFoundException> {
    const professionalType = await this.professionalTypeRepository.findOne(id);

    if (!professionalType) {
      throw new NotFoundException('Professional type not found');
    }

    const deleted = await this.professionalTypeRepository.delete(id);

    if (deleted) {
      return true;
    }

    return false;
  }
}
