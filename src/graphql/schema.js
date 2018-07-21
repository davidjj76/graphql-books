const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const resolvers = require('./resolvers');
const types = require('./types');
const { objReductor } = require('../utils');

const queries = require('./queries');
const mutations = require('./mutations');

const dependencies = { resolvers, types };

const query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: objReductor(queries, dependencies),
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutation',
  fields: objReductor(mutations, dependencies),
});

module.exports = new GraphQLSchema({ query, mutation });
