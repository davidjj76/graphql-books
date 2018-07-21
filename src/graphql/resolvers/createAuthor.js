const { idGenerator } = require('../../utils');

module.exports = (_, args, context) => {
  const newAuthor = {
    id: idGenerator(),
    name: args.name,
  };
  context.data.authors.push(newAuthor);
  return newAuthor;
};
