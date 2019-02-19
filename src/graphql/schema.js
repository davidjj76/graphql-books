const { makeExecutableSchema, gql } = require('apollo-server');

const resolvers = require('./resolvers');
const typesReductor = require('./types');

const { typeDef: typeDefs, resolvers: typeResolvers } = typesReductor(
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
  resolvers: typeResolvers,
});
