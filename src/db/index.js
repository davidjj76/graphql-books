const Sequelize = require('sequelize');
const uuid = require('uuid');

const models = require('./models');
const createRelations = require('./createRelations');
const { objReductor } = require('../utils');

module.exports = connectionString => {
  const sequelize = new Sequelize(connectionString);
  // attach models
  objReductor(models, {
    connection: sequelize,
    types: Sequelize,
    dependencies: { uuid },
  });
  // attach relations
  createRelations(sequelize.models);
  sequelize.sync({ force: true });

  return sequelize.models;
};
