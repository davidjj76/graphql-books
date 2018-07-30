module.exports = ({ getAuthors }, { gql }) => ({
  typeDef: gql`
    extend type Query {
      """
      Gets all authors
      """
      getAuthors: [Author!]!
    }
  `,

  resolvers: {
    getAuthors,
  },
});
