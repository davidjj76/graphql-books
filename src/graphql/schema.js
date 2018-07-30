const { makeExecutableSchema } = require('apollo-server');

const { typeDef: Author } = require('./types/author');
const { typeDef: Book } = require('./types/book');
const { typeDef: AuthorInput } = require('./types/authorInput');
const { typeDef: BookInput } = require('./types/bookInput');

const resolvers = require('./resolvers');

const Query = `
  type Query {
    """
    Gets an author by id
    """
    getAuthor(id: ID!): Author
    """
    Gets all authors
    """
    getAuthors: [Author!]!
    """
    Gets a book by id
    """
    getBook(id: ID!): Book
    """
    Gets all books
    """
    getBooks: [Book!]!
  }
`;

const Mutation = `
  type Mutation {
    """
    Creates a new author
    """
    createAuthor(author: AuthorInput!): Author!
    """
    Creates a new book and an author if not exists
    """
    createBook(author: AuthorInput!, book: BookInput!): Book!
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [Query, Mutation, Author, Book, AuthorInput, BookInput],
  resolvers,
});
