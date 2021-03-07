import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfessionalDto } from './dto/professional.dto';
import { Professional } from './models/professional.entity';
import { ProfessionalTypeService } from './professional-type/professional-type.service';

@Injectable()
export class ProfessionalService {
  constructor(
    @InjectRepository(Professional)
    private readonly professionalRepository: Repository<Professional>,
    private readonly professionalTypeService: ProfessionalTypeService,
  ) {}

  async list(): Promise<Professional[]> {
    return this.professionalRepository.find();
  }

  async getOne(id: number): Promise<Professional | NotFoundException> {
    const professional = await this.professionalRepository.findOne(id);

    if (!professional) {
      throw new NotFoundException('Professional not found');
    }

    return professional;
  }

  async create(
    dto: ProfessionalDto,
  ): Promise<Professional | NotFoundException> {
    const professionalType = await this.professionalTypeService.getOne(
      dto.professionalType.id,
    );

    if (professionalType instanceof NotFoundException) {
      throw professionalType;
    }

    return this.professionalRepository.save(dto);
  }

  async update(
    id: number,
    dto: ProfessionalDto,
  ): Promise<Professional | NotFoundException> {
    const professional = await this.professionalRepository.findOne(id);

    if (!professional) {
      throw new NotFoundException('Professional not found');
    }

    const professionalType = await this.professionalTypeService.getOne(
      dto.professionalType.id,
    );

    if (professionalType instanceof NotFoundException) {
      throw professionalType;
    }

    const professionalDto = ProfessionalDto.toEntity(dto);

    professionalDto.id = Number(id);

    return this.professionalRepository.save(professionalDto);
  }

  // eslint-disable-next-line consistent-return
  async delete(id: number): Promise<boolean | NotFoundException> {
    const professional = await this.professionalRepository.findOne(id);

    if (!professional) {
      throw new NotFoundException('Professional not found');
    }

    const deleted = await this.professionalRepository.delete(id);

    if (deleted) {
      return true;
    }

    return false;
  }
}
