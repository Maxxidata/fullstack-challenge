import models from '../models';
class ProfessionalTypeService {
  constructor() {
    this.professionalType = models.ProfessionalType;
  }
  
  async list() {
    return await this.professionalType.findAll();
  }

  async getOne(id) {
    const professionalType = await this.professionalType.findByPk(id);

    if (!professionalType) {
      throw "Tipo de Profissional não encontrado!";
    }

    return professionalType;
  }

  async create(data) {
    return await this.professionalType.create(data);
  }
  
  async update(id, data) {
    await this.getOne(id);
    return await this.professionalType.update(data, { where: { id } });
  }

  async delete(id) {
    await this.getOne(id);
    return await this.professionalType.destroy({ where: { id } });
  }
}

export default new ProfessionalTypeService;