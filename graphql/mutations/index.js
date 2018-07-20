var requireDirectory = require('require-directory');
const mutations = requireDirectory(module);

module.exports = ({ resolvers, ...dependencies }) =>
  Object.keys(mutations).reduce(
    (acc, key) => ({
      ...acc,
      [key]: {
        ...mutations[key](dependencies),
        resolve: resolvers[key],
      },
    }),
    {},
  );
