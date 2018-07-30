module.exports = ({ createAuthor }, { gql }) => ({
  typeDef: gql`
    extend type Mutation {
      """
      Creates a new author
      """
      createAuthor(author: AuthorInput!): Author!
    }
  `,

  resolvers: {
    createAuthor,
  },
});
