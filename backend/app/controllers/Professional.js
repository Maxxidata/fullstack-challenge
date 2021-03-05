const { Professional, ProfessionalType } = require("../models");

module.exports = {
  async create(req, res) {
    try {
      const { professionalType, ...data } = req.body;
      const professional = await Professional.create({
        ...data,
        professionalTypeId: professionalType.id,
      });

      return res.json(professional);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async list(req, res) {
    try {
      const items = await Professional.findAll({
        include: {
          model: ProfessionalType,
          as: "professionalType",
          attributes: ["id", "description"],
        },
      });

      return res.json(items);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async getById(req, res) {
    try {
      const professional = await Professional.findByPk(req.params.id, {
        include: {
          model: ProfessionalType,
          as: "professionalType",
          attributes: ["id", "description"],
        },
      });

      if (professional === null) {
        return res.status(404);
      }

      return res.json(professional);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async update(req, res) {
    try {
      const { professionalType, ...data } = req.body;
      let professional = await Professional.findByPk(req.params.id);

      if (professional === null) {
        return res.status(404);
      }

      professional = await professional.update({
        ...data,
        professionalTypeId: professionalType.id,
      });

      return res.json(professional);
    } catch (error) {
      console.log(error)
      res.status(400).send(error);
    }
  },
};
