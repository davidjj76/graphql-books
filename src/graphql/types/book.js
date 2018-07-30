module.exports = ({ getAuthor }, { gql }) => {
  const typeDef = gql`
    """
    Describes a book type
    """
    type Book {
      id: ID!
      title: String!
      author: Author!
      pages: Int!
    }
  `;

  const resolvers = {
    Book: {
      author: getAuthor,
    },
  };

  return {
    typeDef,
    resolvers,
  };
};
