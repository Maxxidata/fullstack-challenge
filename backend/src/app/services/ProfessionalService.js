import models from '../models';
import ProfessionalTypeService from '../services/ProfessionalTypeService';
class ProfessionalService {
  constructor() {
    this.professional = models.Professional;
    this.professionalTypeService = ProfessionalTypeService;
  }
  
  async list() {
    return await this.professional.findAll();
  }

  async getOne(id) {
    const professional = await this.professional.findByPk(id);

    if (!professional) {
      throw "Profissional não encontrado!";
    }

    return professional;
  }

  async create(data) {
    await this.professionalTypeService.getOne(data.professionalTypeId);
    return await this.professional.create(data);
  }
  
  async update(id, data) {
    await this.getOne(id);
    return await this.professional.update(data, { where: { id } });
  }

  async delete(id) {
    await this.getOne(id);    
    return await this.professional.destroy({ where: { id } });
  }
}

export default new ProfessionalService;