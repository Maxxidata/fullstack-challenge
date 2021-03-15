const express = require('express');
const typesOfProfessionalsRouter = require('./typesOfProfessionals.routes');
const professionalsRouter = require('./professionals.routes');

const routes = express.Router();

routes.use('/types-of-professionals', typesOfProfessionalsRouter);
routes.use('/professionals', professionalsRouter);

module.exports = routes;