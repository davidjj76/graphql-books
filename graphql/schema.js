const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const resolvers = require('./resolvers');
const types = require('./types');
const dependencies = { resolvers, types };

const queries = require('./queries');
const mutations = require('./mutations');

const query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: queries(dependencies),
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutation',
  fields: mutations(dependencies),
});

module.exports = new GraphQLSchema({ query, mutation });
