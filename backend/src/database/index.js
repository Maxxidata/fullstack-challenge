const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Professional = require('../models/Professional')
const TypeOfProfessional = require('../models/TypeOfProfessional')

const connection = new Sequelize(dbConfig);

Professional.init(connection)
TypeOfProfessional.init(connection)

Professional.associate(connection.models);
TypeOfProfessional.associate(connection.models);

module.exports = connection;