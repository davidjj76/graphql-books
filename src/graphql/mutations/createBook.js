module.exports = ({ createBook }, { gql }) => {
  const typeDef = gql`
    extend type Mutation {
      """
      Creates a new book and an author if not exists
      """
      createBook(author: AuthorInput!, book: BookInput!): Book!
    }
  `;

  const resolvers = {
    Mutation: {
      createBook,
    },
  };

  return {
    typeDef,
    resolvers,
  };
};
