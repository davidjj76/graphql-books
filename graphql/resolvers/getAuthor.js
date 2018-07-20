module.exports = (book, args, context) => {
  const authorId = book ? book.authorId : args.id;
  return context.data.authors.find(a => a.id === authorId);
};
