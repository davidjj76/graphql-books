const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const queries = require('./queries');

const query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: queries,
});

module.exports = new GraphQLSchema({ query });
