import { BadRequestException, Injectable } from '@nestjs/common';
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

  async getOne(id: number): Promise<Professional | BadRequestException> {
    const professional = await this.professionalRepository.findOne(id);

    if (!professional) {
      throw new BadRequestException('Professional not found');
    }

    return this.professionalRepository.findOne(id);
  }

  async create(
    dto: ProfessionalDto,
  ): Promise<Professional | BadRequestException> {
    const professionalType = await this.professionalTypeService.getOne(
      dto.professionalType.id,
    );

    if (professionalType instanceof BadRequestException) {
      throw professionalType;
    }

    return this.professionalRepository.save(dto);
  }

  async update(
    id: number,
    dto: ProfessionalDto,
  ): Promise<Professional | BadRequestException> {
    const professionalType = await this.professionalTypeService.getOne(
      dto.professionalType.id,
    );

    if (professionalType instanceof BadRequestException) {
      throw professionalType;
    }

    const professional = ProfessionalDto.toEntity(dto);

    professional.id = Number(id);

    return this.professionalRepository.save(professional);
  }

  // eslint-disable-next-line consistent-return
  async delete(id: number): Promise<void | BadRequestException> {
    const professional = await this.professionalRepository.findOne(id);

    if (!professional) {
      throw new BadRequestException('Professional not found');
    }

    await this.professionalRepository.delete(id);
  }
}
