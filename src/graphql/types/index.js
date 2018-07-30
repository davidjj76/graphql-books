const requireDirectory = require('require-directory');
const types = requireDirectory(module);

module.exports = (...args) =>
  Object.keys(types).reduce(
    (acc, key) => {
      const { typeDef, resolvers } =
        typeof types[key] === 'function'
          ? types[key].apply(null, args)
          : types[key];
      return {
        typeDef: [...acc.typeDef, typeDef],
        resolvers: resolvers ? [...acc.resolvers, resolvers] : acc.resolvers,
      };
    },
    {
      typeDef: [],
      resolvers: [],
    },
  );
