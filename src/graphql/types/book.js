module.exports = ({ getAuthor }, { gql }) => ({
  typeDef: gql`
    """
    Describes a book type
    """
    type Book {
      id: ID!
      title: String!
      author: Author!
      pages: Int!
    }
  `,

  resolvers: {
    Book: {
      author: getAuthor,
    },
  },
});
