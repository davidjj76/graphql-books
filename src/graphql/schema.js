const { makeExecutableSchema, gql } = require('apollo-server');
const { merge } = require('lodash');

const resolvers = require('./resolvers');

const { typeDef: Types, resolvers: typeResolvers } = require('./types')(
  resolvers,
  { gql },
);

const { typeDef: Query, resolvers: queryResolvers } = require('./queries')(
  resolvers,
  { gql, merge },
);

const {
  typeDef: Mutation,
  resolvers: mutationResolvers,
} = require('./mutations')(resolvers, { gql, merge });

module.exports = makeExecutableSchema({
  typeDefs: [...Query, ...Mutation, ...Types],
  resolvers: merge(queryResolvers, mutationResolvers, ...typeResolvers),
});
