module.exports = ({ getBook }, { gql }) => ({
  typeDef: gql`
    extend type Query {
      """
      Gets a book by id
      """
      getBook(id: ID!): Book
    }
  `,

  resolvers: {
    getBook,
  },
});
