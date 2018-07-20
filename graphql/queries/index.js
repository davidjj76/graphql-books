var requireDirectory = require('require-directory');
const queries = requireDirectory(module);

module.exports = ({ resolvers, ...dependencies }) =>
  Object.keys(queries).reduce(
    (acc, key) => ({
      ...acc,
      [key]: {
        ...queries[key](dependencies),
        resolve: resolvers[key],
      },
    }),
    {},
  );
