module.exports.typeDef = `
  """
  Describes an author type
  """
  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }
`;
