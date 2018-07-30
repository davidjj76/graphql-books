module.exports = ({ getBooks }, { gql }) => {
  const typeDef = gql`
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
