import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Professional } from "../entity/Professional.entity";

export class ProfessionalController {

  private professionalRepository = getRepository(Professional);

  async all(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      return this.professionalRepository.find();
    } catch (err) {
      return response.status(500).json({ message: err })
    }
  }

  async one(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const id: number = Number(request.params.id);

      const professional = await this.professionalRepository.findOne(id);

      if(!professional) {
        return response.status(400).json({ message: 'Professional not found' })  
      }

      return professional;
    } catch (err) {
      return response.status(500).json({ message: err })
    }
  }

  async save(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      return this.professionalRepository.save(request.body);
    } catch (err) {
      return response.status(500).json({ message: err })
    }
  }

  async update(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const id: number = Number(request.params.id);
      return this.professionalRepository.save({ id, ...request.body });
    } catch (err) {
      return response.status(500).json({ message: err })
    }
  }

  async delete(request: Request, response: Response, next: NextFunction): Promise<any> {
    try {
      const id: number = Number(request.params.id);

      const professional = await this.professionalRepository.findOne(id);
    
      if(!professional) {
        return response.status(400).json({ message: 'Professional not found' }) 
      }
  
      await this.professionalRepository.delete(id);
      
      return response.status(200);
    } catch (err) {
      return response.status(500).json({ message: err })
    }
  }

}