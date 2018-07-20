const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const resolvers = require('./resolvers');
const types = require('./types');
const { typeReductor } = require('./utils');

const queryReductor = typeReductor(require('./queries'));
const mutationReductor = typeReductor(require('./mutations'));

const dependencies = { resolvers, types };

const query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: queryReductor(dependencies),
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutation',
  fields: mutationReductor(dependencies),
});

module.exports = new GraphQLSchema({ query, mutation });
