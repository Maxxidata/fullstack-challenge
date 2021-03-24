import ProfessionalTypeService from '../services/ProfessionalTypeService';

class ProfessionalTypeController {
  constructor() {
    this.professionalTypeService = ProfessionalTypeService;
  }
  
  async list() {
    return await this.professionalTypeService.list();
  }

  async getOne(id) {
    const professionalType = await this.professionalTypeService.getOne(id);

    if (!professionalType) {
      throw "Usuário não encontrado!";
    }

    return professionalType;
  }

  async create(data) {
    const professionalType = await this.professionalTypeService.create(data);
    return professionalType;
  }
  
  async update(id, data) {
    const professionalType = await this.professionalTypeService.update(id, data);
    return professionalType;
  }

  async delete(id) {
    await this.professionalTypeService.delete(id);
    return;
  }
}

export default new ProfessionalTypeController;