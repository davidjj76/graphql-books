const deleteInstance = resolvedValue => instance =>
  instance && instance.destroy().then(() => resolvedValue);

module.exports = ({ author, book }) => ({
  getAuthors() {
    return author.findAll();
  },

  getAuthor(authorId) {
    return author.findById(authorId);
  },

  deleteAuthor(authorId) {
    return author.findById(authorId).then(deleteInstance(authorId));
  },

  createAuthor(authorData) {
    return author.create(authorData);
  },

  getBooks(authorId) {
    return book.findAll(authorId && { where: { authorId } });
  },

  getBook(bookId) {
    return book.findById(bookId);
  },

  deleteBook(bookId) {
    return book.findById(bookId).then(deleteInstance(bookId));
  },

  createBook(authorData, bookData) {
    return author
      .findOrCreate({ where: authorData })
      .then(([{ id: authorId }]) => book.create({ ...bookData, authorId }));
  },
});
