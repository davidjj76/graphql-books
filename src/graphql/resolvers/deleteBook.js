module.exports = (_, { id }, { services: { Books } }) => Books.deleteBook(id);
