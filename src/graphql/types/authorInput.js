module.exports = (_, { gql }) => {
  const typeDef = gql`
    """
    Describes a book input type
    """
    input BookInput {
      title: String!
      pages: Int
    }
  `;

  return { typeDef };
};
