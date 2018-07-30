module.exports = ({ getBooks }, { gql }) => ({
  typeDef: gql`
    """
    Describes an author type
    """
    type Author {
      id: ID!
      name: String!
      books: [Book!]!
    }
  `,

  resolvers: {
    Author: {
      books: getBooks,
    },
  },
});
