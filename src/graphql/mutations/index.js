module.exports = ({ createAuthor, createBook }) => {
  const typeDef = `
    type Mutation

    extend type Mutation {
      """
      Creates a new author
      """
      createAuthor(author: AuthorInput!): Author!
    }

    extend type Mutation {
      """
      Creates a new book and an author if not exists
      """
      createBook(author: AuthorInput!, book: BookInput!): Book!
    }
  `;

  const resolvers = {
    Mutation: {
      createAuthor,
      createBook,
    },
  };

  return {
    typeDef,
    resolvers,
  };
};
