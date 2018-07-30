const { ApolloServer, makeExecutableSchema, gql } = require('apollo-server');
const { typeDefs, resolvers } = require('./graphql');
const data = require('./db')('sqlite:./db/books.sqlite3');

const typeDefs = gql`
  """
  Describes a book type
  """
  type Book {
    id: ID!
    title: String!
    author: Author!
    pages: Int!
  }

  """
  Describes an author type
  """
  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }

  """
  Describes a book input type
  """
  input BookInput {
    title: String!
    pages: Int
  }

  """
  Describes an author input type
  """
  input AuthorInput {
    name: String!
  }

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

const findAllAuthors = (_, __, { data }) => data.author.findAll();
const findAllBooks = (author, __, { data }) =>
  data.book.findAll(author && { where: { authorId: author.id } });
const findAuthorById = (book, { id }, { data }) =>
  data.author.findById(book ? book.authorId : id);
const findBookById = (_, { id }, { data }) => data.book.findById(id);

const createAuthor = (_, { author }, { data }) => data.author.create(author);
const createBook = (_, { author, book }, { data }) =>
  data.author
    .findOrCreate({ where: author })
    .then(([{ id: authorId }]) => data.book.create({ ...book, authorId }));

const resolvers = {
  Author: {
    books: findAllBooks,
  },
  Book: {
    author: findAuthorById,
  },
  Query: {
    getAuthors: findAllAuthors,
    getAuthor: findAuthorById,
    getBooks: findAllBooks,
    getBook: findBookById,
  },
  Mutation: {
    createAuthor,
    createBook,
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({ schema, context: { data } });

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
