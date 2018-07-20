module.exports = (_, args, context) =>
  context.data.books.find(b => b.id === args.id);
