module.exports = ({ getAuthor, getAuthors, getBook, getBooks }) => {
  const typeDef = `
    type Query

    extend type Query {
      """
      Gets an author by id
      """
      getAuthor(id: ID!): Author
    }

    extend type Query {
      """
      Gets all authors
      """
      getAuthors: [Author!]!
    }

    extend type Query {
      """
      Gets a book by id
      """
      getBook(id: ID!): Book
    }

    extend type Query {
      """
      Gets all books
      """
      getBooks: [Book!]!
    }
  `;

  const resolvers = {
    Query: {
      getAuthor,
      getAuthors,
      getBook,
      getBooks,
    },
  };

  return {
    typeDef,
    resolvers,
  };
};
