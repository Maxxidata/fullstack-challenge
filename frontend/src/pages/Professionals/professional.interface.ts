import { ProfessionalTypeInterface } from "../ProfessionalTypes/professional-type.interface";

export interface ProfessionalInterface {
  id: number;

  name: string;
  
  phone?: string;

  email?: string;
  
  professionalType: ProfessionalTypeInterface,
  
  situation: boolean,
}