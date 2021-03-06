import { ProfessionalType } from '../models/professional-type.entity';
import { Professional } from '../models/professional.entity';
import { ProfessionalTypeDto } from './professional-type.dto';

export class ProfessionalDto {
  id: number;

  name: string;

  phone?: string;

  email?: string;

  professionalType: ProfessionalType;

  situation: boolean;

  createdAt: Date;

  updatedAt: Date;

  static toEntity(dto: ProfessionalDto): Professional {
    return <Professional>{
      id: dto.id,
      name: dto.name,
      phone: dto.phone,
      email: dto.email,
      professionalType: ProfessionalTypeDto.toEntity(dto.professionalType),
      situation: dto.situation,
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
    };
  }
}
