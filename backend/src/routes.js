const express = require("express");
const ProfessionalsController = require('./controllers/ProfessionalsController')

const professionalsController = new ProfessionalsController();

const routes = express.Router()

routes.post('/professionals', professionalsController.create)

module.exports = routes;