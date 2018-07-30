const requireDirectory = require('require-directory');
const types = requireDirectory(module);

module.exports = (...args) =>
  Object.keys(types).reduce(
    (acc, key) => {
      const type =
        typeof types[key] === 'function'
          ? types[key].apply(null, args)
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
