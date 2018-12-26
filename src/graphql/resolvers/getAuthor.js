module.exports = (book, { id }, { services: { Books } }) =>
  Books.getAuthor(book ? book.authorId : id);
