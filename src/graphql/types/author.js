module.exports = ({ getBooks }) => {
  const typeDef = `
    """
    Describes an author type
    """
    type Author {
      id: ID!
      name: String!
      books: [Book!]!
    }
  `;

  const resolvers = {
    Author: {
      books: getBooks,
    },
  };

  return {
    typeDef,
    resolvers,
  };
};
