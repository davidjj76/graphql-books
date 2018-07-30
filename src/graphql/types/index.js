const requireDirectory = require('require-directory');
const types = requireDirectory(module);

module.exports = resolvers =>
  Object.keys(types).reduce(
    (acc, key) => {
      const type =
        typeof types[key] === 'function'
          ? types[key].call(null, resolvers)
          : types[key];
      return {
        typeDef: [...acc.typeDef, type.typeDef],
        resolvers: type.resolvers
          ? [...acc.resolvers, type.resolvers]
          : acc.resolvers,
      };
    },
    {
      typeDef: [],
      resolvers: [],
    },
  );
