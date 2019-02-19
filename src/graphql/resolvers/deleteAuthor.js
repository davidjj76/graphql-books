module.exports = (_, { id }, { services: { Books } }) => Books.deleteAuthor(id);
