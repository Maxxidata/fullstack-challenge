import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { ProfessionalType } from "../entity/ProfessionalType.entity";

export class ProfessionalTypeController {

  private professionalTypeRepository = getRepository(ProfessionalType);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.professionalTypeRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.professionalTypeRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.professionalTypeRepository.save(request.body);
  }

  async update(request: Request, response: Response, next: NextFunction) {
    const id: number = Number(request.params.id);
    return this.professionalTypeRepository.save({ id, ...request.body });
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.professionalTypeRepository.findOne(request.params.id);
    await this.professionalTypeRepository.remove(userToRemove);
  }

}