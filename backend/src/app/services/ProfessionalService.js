import Professional from '../models/Professional';

class ProfessionalService {
  constructor() {}
  
  async list() {
    return await Professional.findAll();
  }

  async getOne(id) {
    const professional = this.professionals[id];

    if (!professional) {
      throw "Usuário não encontrado!";
    }

    return professional;
  }

  async create(data) {
    this.professionals.push(data);
    return this.professionals[this.professionals.length-1];
  }
  
  async update(id, data) {
    let professional = this.professionals[id];

    if (!professional) {
      throw "Usuário não encontrado!";
    }

    professional = data;
    this.professionals[id] = professional;
    
    return this.professionals[id];
  }

  async delete(id) {
    const professional = this.professionals[id];

    if (!professional) {
      throw "Usuário não encontrado!";
    }

    this.professionals.splice(id, 1);
    
    return;
  }
}

export default new ProfessionalService;