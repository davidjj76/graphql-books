module.exports = (_, { id }, { services: { Books } }) => Books.getBook(id);
