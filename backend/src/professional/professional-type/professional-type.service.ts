import { BadRequestException, Injectable } from '@nestjs/common';
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

  async getOne(id: number): Promise<ProfessionalType | BadRequestException> {
    const professionalType = await this.professionalTypeRepository.findOne(id);

    if (!professionalType) {
      throw new BadRequestException('Professional type not found');
    }

    return professionalType;
  }

  async create(dto: ProfessionalTypeDto): Promise<ProfessionalType> {
    return this.professionalTypeRepository.save(dto);
  }

  async update(id: number, dto: ProfessionalTypeDto): Promise<any> {
    const professionalType = ProfessionalTypeDto.toEntity(dto);

    professionalType.id = Number(id);

    return this.professionalTypeRepository.save(professionalType);
  }

  // eslint-disable-next-line consistent-return
  async delete(id: number): Promise<void | BadRequestException> {
    const professionalType = await this.professionalTypeRepository.findOne(id);

    if (!professionalType) {
      throw new BadRequestException('Professional type not found');
    }

    await this.professionalTypeRepository.delete(id);
  }
}
