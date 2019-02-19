module.exports = (author, __, { services: { Books } }) =>
  Books.getBooks(author && author.id);
