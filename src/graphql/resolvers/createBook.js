module.exports = (_, { author, book }, { data }) =>
  data.author
    .findOrCreate({ where: author })
    .then(([{ id: authorId }]) => data.book.create({ ...book, authorId }));
