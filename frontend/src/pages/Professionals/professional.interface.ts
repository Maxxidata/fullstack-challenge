export interface ProfessionalInterface {
  id: number;

  name: string;
  
  phone?: string;

  email?: string;
  
  professionalType: {
    id: number
  },
  
  situation: boolean,
}