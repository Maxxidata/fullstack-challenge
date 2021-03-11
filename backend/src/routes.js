const express = require("express");
const ProfessionalsController = require('./controllers/ProfessionalsController');
const TypesOfProfessionalsController = require('./controllers/TypesOfProfessionalsController')

const professionalsController = new ProfessionalsController();
const typesOfProfessionalsController = new TypesOfProfessionalsController();

const routes = express.Router()

routes.post('/types-of-professionals', typesOfProfessionalsController.create);
routes.get('/types-of-professionals', typesOfProfessionalsController.show);
routes.get('/types-of-professionals/:id', typesOfProfessionalsController.index);
routes.put('/types-of-professionals/:id', typesOfProfessionalsController.update);
routes.delete('/types-of-professionals/:id', typesOfProfessionalsController.destroy);

routes.post('/professionals', professionalsController.create);
routes.get('/professionals', professionalsController.show);
routes.get('/professionals/:id', professionalsController.index);
routes.put('/professionals/:id', professionalsController.update);
routes.delete('/professionals/:id', professionalsController.destroy);

module.exports = routes;