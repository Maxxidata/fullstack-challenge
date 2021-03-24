import ProfessionalService from '../services/ProfessionalService';

class ProfessionalController {
  constructor() {
    this.professionalService = ProfessionalService;
  }
  
  async list() {
    return await this.professionalService.list();
  }

  async getOne(id) {
    const professional = await this.professionalService.getOne(id);

    if (!professional) {
      throw "Usuário não encontrado!";
    }

    return professional;
  }

  async create(data) {
    const professional = await this.professionalService.create(data);
    return professional;
  }
  
  async update(id, data) {
    const professional = await this.professionalService.update(id, data);
    return professional;
  }

  async delete(id) {
    await this.professionalService.delete(id);
    return;
  }
}

export default new ProfessionalController;