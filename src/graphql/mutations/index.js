const { merge } = require('lodash');

module.exports = (resolvers, { gql }) => {
  const createAuthor = require('./createAuthor')(resolvers, { gql });
  const createBook = require('./createBook')(resolvers, { gql });

  const typeDef = `
    type Mutation
  `;

  return {
    typeDef: [typeDef, createAuthor.typeDef, createBook.typeDef],
    resolvers: merge(createAuthor.resolvers, createBook.resolvers),
  };
};
