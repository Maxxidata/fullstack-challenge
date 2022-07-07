const express = require('express');
const typesOfProfessionalsRouter = express.Router();

const TypesOfProfessionalsController = require('../controllers/TypesOfProfessionalsController');

const typesOfProfessionalsController = new TypesOfProfessionalsController();

typesOfProfessionalsRouter.post('/', typesOfProfessionalsController.create);
typesOfProfessionalsRouter.get('/', typesOfProfessionalsController.show);
typesOfProfessionalsRouter.get('/:id', typesOfProfessionalsController.index);
typesOfProfessionalsRouter.put('/:id', typesOfProfessionalsController.update);
typesOfProfessionalsRouter.delete('/:id', typesOfProfessionalsController.destroy);

module.exports = typesOfProfessionalsRouter;