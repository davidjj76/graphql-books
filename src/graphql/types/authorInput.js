module.exports = (_, { gql }) => ({
  typeDef: gql`
    """
    Describes a book input type
    """
    input BookInput {
      title: String!
      pages: Int
    }
  `,
});
