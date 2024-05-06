const Sequelize = require('sequelize');
const dbConfig = require('../config.js');
const { loadModels } = require('../../src/utils/loader');

const connection = new Sequelize(dbConfig);

// Carrega dinamicamente os modelos
loadModels(connection);

module.exports = connection;
