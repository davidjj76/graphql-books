module.exports = (author, __, { data }) => {
  const options = author && { where: { authorId: author.id } };
  return data.book.findAll(options);
};
