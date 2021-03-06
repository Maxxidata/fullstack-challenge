import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { ProfessionalType } from "../entity/ProfessionalType.entity";

export class ProfessionalTypeController {

  private professionalTypeRepository = getRepository(ProfessionalType);

  async all(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      return this.professionalTypeRepository.find();
    } catch (err) {
      return response.status(500).json({ message: err })
    }
  }

  async one(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const id: number = Number(request.params.id);

      const professionalType = await this.professionalTypeRepository.findOne(id);

      if(!professionalType) {
        return response.status(400).json({ message: 'Professional type not found' })  
      }

      return professionalType;
    } catch (err) {
      return response.status(500).json({ message: err })
    }
  }

  async save(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      return this.professionalTypeRepository.save(request.body);
    } catch (err) {
      return response.status(500).json({ message: err })
    }
  }

  async update(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const id: number = Number(request.params.id);
      return this.professionalTypeRepository.save({ id, ...request.body });
    } catch (err) {
      return response.status(500).json({ message: err })
    }
  }

  async delete(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const id: number = Number(request.params.id);

      const professionalType = await this.professionalTypeRepository.findOne(id);
      
      if(!professionalType) {
        return response.status(400).json({ message: 'Professional type not found' }) 
      }

      return response.status(200).json(this.professionalTypeRepository.delete(id));
    } catch (err) {
      return response.status(500).json({ message: err })
    }
  }

}