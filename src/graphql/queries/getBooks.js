module.exports = ({ getBooks }, { gql }) => ({
  typeDef: gql`
    extend type Query {
      """
      Gets all books
      """
      getBooks: [Book!]!
    }
  `,

  resolvers: {
    getBooks,
  },
});
