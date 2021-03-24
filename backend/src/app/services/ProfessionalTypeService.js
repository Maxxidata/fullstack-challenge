class ProfessionalTypeService {
  constructor() {
    this.professionalTypes = [
      { 'name': 'prof1' },
      { 'name': 'prof2' },
      { 'name': 'prof3' }
    ];
  }
  
  async list() {
    return this.professionalTypes;
  }

  async getOne(id) {
    const professionalType = this.professionalTypes[id];

    if (!professionalType) {
      throw "Usuário não encontrado!";
    }

    return professionalType;
  }

  async create(data) {
    this.professionalTypes.push(data);
    return this.professionalTypes[this.professionalTypes.length-1];
  }
  
  async update(id, data) {
    let professionalType = this.professionalTypes[id];

    if (!professionalType) {
      throw "Usuário não encontrado!";
    }

    professionalType = data;
    this.professionalTypes[id] = professionalType;
    
    return this.professionalTypes[id];
  }

  async delete(id) {
    const professionalType = this.professionalTypes[id];

    if (!professionalType) {
      throw "Usuário não encontrado!";
    }

    this.professionalTypes.splice(id, 1);
    
    return;
  }
}

export default new ProfessionalTypeService;