const express = require('express');
const professionalsRouter = express.Router();

const ProfessionalsController = require('../controllers/ProfessionalsController');

const professionalsController = new ProfessionalsController();

professionalsRouter.post('/', professionalsController.create);
professionalsRouter.get('/', professionalsController.show);
professionalsRouter.get('/:id', professionalsController.index);
professionalsRouter.put('/:id', professionalsController.update);
professionalsRouter.delete('/:id', professionalsController.destroy);

module.exports = professionalsRouter;