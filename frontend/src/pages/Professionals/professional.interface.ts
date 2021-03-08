import { IProfessionalType } from "../ProfessionalTypes/professional-type.interface";

export interface IProfessional {
  id: number;

  name: string;
  
  phone?: string;

  email?: string;
  
  professionalType: IProfessionalType,
  
  situation: boolean,
}