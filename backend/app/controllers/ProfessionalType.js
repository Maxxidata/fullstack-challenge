const { ProfessionalType } = require("../models");

module.exports = {
  async create(req, res) {
    const { description, status } = req.body;
    try {
      const professionlType = await ProfessionalType.create(req.body);

      return res.json(professionlType);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async list(req, res) {
    try {
      const items = await ProfessionalType.findAll();

      return res.json(items);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async getById(req, res) {
    try {
      const professionalType = await ProfessionalType.findByPk(req.params.id);
      if (professionalType === null) {
        return res.status(404);
      }

      return res.json(professionalType);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async update(req, res) {
    try {
      let professionalType = await ProfessionalType.findByPk(req.params.id);
      if (professionalType === null) {
        return res.status(404);
      }

      professionalType = await professionalType.update(req.body);

      return res.json(professionalType);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
