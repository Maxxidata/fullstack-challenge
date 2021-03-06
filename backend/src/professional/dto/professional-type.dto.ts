import { ProfessionalType } from '../models/professional-type.entity';
import { Professional } from '../models/professional.entity';
import { ProfessionalDto } from './professional.dto';

export class ProfessionalTypeDto {
  id: number;

  description: string;

  situation: boolean;

  professionals: Professional[];

  createdAt: Date;

  updatedAt: Date;

  static toEntity(dto: ProfessionalTypeDto): ProfessionalType {
    return <ProfessionalType>{
      id: dto.id,
      description: dto.description,
      situation: dto.situation,
      professionals:
        dto.professionals &&
        dto.professionals.map(professional =>
          ProfessionalDto.toEntity(professional),
        ),
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
    };
  }
}
