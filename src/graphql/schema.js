const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const resolvers = require('./resolvers');
const types = require('./types');
const { objReductor } = require('../utils');

const queries = require('./queries');
const mutations = require('./mutations');

const queriesReductor = objReductor(queries);
const mutationsReductor = objReductor(mutations);

const config = { resolvers, types };

const query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: queriesReductor(config),
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutation',
  fields: mutationsReductor(config),
});

module.exports = new GraphQLSchema({ query, mutation });
