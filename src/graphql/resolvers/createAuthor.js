module.exports = (_, { author }, { services: { Books } }) =>
  Books.createAuthor(author);
