module.exports = ({ createAuthor }, { gql }) => {
  const typeDef = gql`
    extend type Mutation {
      """
      Creates a new author
      """
      createAuthor(author: AuthorInput!): Author!
    }
  `;

  const resolvers = {
    Mutation: {
      createAuthor,
    },
  };

  return {
    typeDef,
    resolvers,
  };
};
