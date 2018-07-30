module.exports = (resolvers, { gql, merge }) => {
  // TODO: extract this logic
  const getAuthor = require('./getAuthor')(resolvers, { gql });
  const getAuthors = require('./getAuthors')(resolvers, { gql });
  const getBook = require('./getBook')(resolvers, { gql });
  const getBooks = require('./getBooks')(resolvers, { gql });

  const typeDef = gql`
    type Query
  `;

  return {
    typeDef: [
      typeDef,
      getAuthor.typeDef,
      getAuthors.typeDef,
      getBook.typeDef,
      getBooks.typeDef,
    ],
    resolvers: {
      Query: merge(
        getAuthor.resolvers,
        getAuthors.resolvers,
        getBook.resolvers,
        getBooks.resolvers,
      ),
    },
  };
};
