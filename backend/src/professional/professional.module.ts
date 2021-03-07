import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Professional } from './models/professional.entity';
import { ProfessionalType } from './models/professional-type.entity';

import { ProfessionalController } from './professional.controller';
import { ProfessionalTypeController } from './professional-type/professional-type.controller';

import { ProfessionalService } from './professional.service';
import { ProfessionalTypeService } from './professional-type/professional-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([Professional, ProfessionalType])],
  controllers: [ProfessionalController, ProfessionalTypeController],
  providers: [ProfessionalService, ProfessionalTypeService],
})
export class ProfessionalModule {}
