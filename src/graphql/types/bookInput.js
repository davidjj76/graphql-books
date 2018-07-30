module.exports = (_, { gql }) => {
  const typeDef = gql`
    """
    Describes an author input type
    """
    input AuthorInput {
      name: String!
    }
  `;

  return { typeDef };
};
