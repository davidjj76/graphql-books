module.exports = ({ createBook }, { gql }) => ({
  typeDef: gql`
    extend type Mutation {
      """
      Creates a new book and an author if not exists
      """
      createBook(author: AuthorInput!, book: BookInput!): Book!
    }
  `,

  resolvers: {
    createBook,
  },
});
