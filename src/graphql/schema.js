const { makeExecutableSchema, gql } = require('apollo-server');
const { merge } = require('lodash');

const resolvers = require('./resolvers');

const { typeDef: typeDefs, resolvers: typeResolvers } = require('./types')(
  resolvers,
  { gql },
);

const query = gql`
  type Query
`;

const mutation = gql`
  type Mutation
`;

module.exports = makeExecutableSchema({
  typeDefs: [query, mutation, ...typeDefs],
  resolvers: merge(...typeResolvers),
});
