import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Professional } from "../entity/Professional.entity";

export class ProfessionalController {

  private professionalRepository = getRepository(Professional);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.professionalRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.professionalRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.professionalRepository.save(request.body);
  }

  async update(request: Request, response: Response, next: NextFunction) {
    const id: number = Number(request.params.id);
    return this.professionalRepository.save({ id, ...request.body });
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.professionalRepository.findOne(request.params.id);
    await this.professionalRepository.remove(userToRemove);
  }

}