module.exports.typeDef = `
  """
  Describes a book type
  """
  type Book {
    id: ID!
    title: String!
    author: Author!
    pages: Int!
  }
`;
