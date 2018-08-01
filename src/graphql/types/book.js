module.exports = ({ createBook, getAuthor, getBook, getBooks }, { gql }) => ({
  typeDef: gql`
    """
    Describes a book type
    """
    type Book {
      id: ID!
      title: String!
      author: Author!
      pages: Int!
    }

    extend type Query {
      """
      Gets a book by id
      """
      getBook(id: ID!): Book
      """
      Gets all books
      """
      getBooks: [Book!]!
    }

    extend type Mutation {
      """
      Creates a new book and an author if not exists
      """
      createBook(author: AuthorInput!, book: BookInput!): Book!
    }

  `,

  resolvers: {
    Book: {
      author: getAuthor,
    },
    Query: {
      getBook,
      getBooks,
    },
    Mutation: {
      createBook,
    },
  },
});
