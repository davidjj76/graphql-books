module.exports = (author, __, context) => {
  return author
    ? context.data.books.filter(b => b.authorId === author.id)
    : context.data.books;
};
