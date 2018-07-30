module.exports = (book, { id }, { data }) =>
  data.author.findById(book ? book.authorId : id);
