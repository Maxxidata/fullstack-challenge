const express = require("express");
const ProfessionalsController = require('./controllers/ProfessionalsController')

const professionalsController = new ProfessionalsController();

const routes = express.Router()

routes.post('/professionals', professionalsController.create)
routes.get('/professionals', professionalsController.show)
routes.get('/professionals/:id', professionalsController.index)
routes.put('/professionals/:id', professionalsController.update)
routes.delete('/professionals/:id', professionalsController.destroy)

module.exports = routes;