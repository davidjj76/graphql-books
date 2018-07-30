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

module.exports = {
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
