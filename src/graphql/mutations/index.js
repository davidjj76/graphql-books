module.exports = (resolvers, { gql, merge }) => {
  // TODO: extract this logic
  const createAuthor = require('./createAuthor')(resolvers, { gql });
  const createBook = require('./createBook')(resolvers, { gql });

  const typeDef = gql`
    type Mutation
  `;

  return {
    typeDef: [typeDef, createAuthor.typeDef, createBook.typeDef],
    resolvers: {
      Mutation: merge(createAuthor.resolvers, createBook.resolvers),
    },
  };
};
