module.exports = (author, __, context) => {
  const options = author && { authorId: author.id };
  return context.data.book.findAll(options);
};
