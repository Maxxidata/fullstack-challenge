import { Professional } from '../../professional/models/professional.entity';
import { ProfessionalType } from '../../professional/models/professional-type.entity';

export class UtilTest {
  static valideProfessionalType(): ProfessionalType {
    const professionalType = new ProfessionalType();
    professionalType.id = 1;
    professionalType.description = 'this is a description';
    professionalType.situation = true;
    return professionalType;
  }

  static valideProfessional(): Professional {
    const professional = new Professional();
    professional.id = 1;
    professional.name = 'Jonh';
    professional.phone = '(00) 0 0000-0000';
    professional.email = 'jonh@email.com';
    professional.professionalType = this.valideProfessionalType();
    professional.situation = true;
    return professional;
  }
}
