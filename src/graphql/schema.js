const { makeExecutableSchema } = require('apollo-server');
const { merge } = require('lodash');

const resolvers = require('./resolvers');

const { typeDef: Types, resolvers: typeResolvers } = require('./types')(
  resolvers,
);
const { typeDef: Query, resolvers: queryResolvers } = require('./queries')(
  resolvers,
);
const {
  typeDef: Mutation,
  resolvers: mutationResolvers,
} = require('./mutations')(resolvers);

module.exports = makeExecutableSchema({
  typeDefs: [Query, Mutation, ...Types],
  resolvers: merge(queryResolvers, mutationResolvers, ...typeResolvers),
});
