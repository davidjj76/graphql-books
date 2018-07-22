module.exports = (author, __, { data }) =>
  data.book.findAll(author && { where: { authorId: author.id } });
