module.exports = (book, { id }, { data }) => {
  const authorId = book ? book.authorId : id;
  return data.author.findById(authorId);
};
