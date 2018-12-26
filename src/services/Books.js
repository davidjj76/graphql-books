module.exports = ({ author, book }) => ({
  getAuthors() {
    return author.findAll();
  },

  getAuthor(authorId) {
    return author.findById(authorId);
  },

  createAuthor(authorData) {
    return author.create(authorData);
  },

  getBooks(authorId) {
    console.log(1, authorId);
    return book.findAll(authorId && { where: { authorId } });
  },

  getBook(bookId) {
    return book.findById(bookId);
  },

  createBook(authorData, bookData) {
    return author
      .findOrCreate({ where: authorData })
      .then(([{ id: authorId }]) => book.create({ ...bookData, authorId }));
  },
});
