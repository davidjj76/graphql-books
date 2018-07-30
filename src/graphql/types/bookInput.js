module.exports = (_, { gql }) => ({
  typeDef: gql`
    """
    Describes an author input type
    """
    input AuthorInput {
      name: String!
    }
  `,
});
