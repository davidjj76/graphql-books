const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const queries = require('./queries');
const mutations = require('./mutations');

const query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: queries,
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutation',
  fields: mutations,
});

module.exports = new GraphQLSchema({ query, mutation });
