const Sequelize = require('sequelize');
const uuid = require('uuid');

const models = require('./models');
const createRelations = require('./createRelations');
const { objReductor } = require('../utils');

const modelsReductor = objReductor(models);

module.exports = connectionString => {
  const sequelize = new Sequelize(connectionString);

  // attach models
  modelsReductor({
    connection: sequelize,
    types: Sequelize,
    dependencies: { uuid },
  });

  // attach relations
  createRelations(sequelize.models);

  // sync database (avoid in production)
  sequelize.sync({ force: true });

  return sequelize.models;
};
