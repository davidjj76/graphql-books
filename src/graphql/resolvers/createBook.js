module.exports = (_, { author, book }, { services: { Books } }) =>
  Books.createBook(author, book);
