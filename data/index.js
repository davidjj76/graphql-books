const Sequelize = require('sequelize');
const uuid = require('uuid');
const { objReductor } = require('../utils');

const sequelize = new Sequelize('sqlite:./data/books.sqlite');

// attach models
const models = require('./models');
objReductor(models, {
  connection: sequelize,
  types: Sequelize,
  dependencies: { uuid },
});

// attach relations
const createRelations = require('./createRelations');
createRelations(sequelize.models);

sequelize.sync({ force: true });

module.exports = sequelize.models;
