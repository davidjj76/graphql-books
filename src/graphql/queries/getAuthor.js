module.exports = ({ getAuthor }, { gql }) => ({
  typeDef: gql`
    extend type Query {
      """
      Gets an author by id
      """
      getAuthor(id: ID!): Author
    }
  `,

  resolvers: {
    getAuthor,
  },
});
