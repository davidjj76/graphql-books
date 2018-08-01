const requireDirectory = require('require-directory');
const { objReductor } = require('../../utils');

const types = requireDirectory(module);

module.exports = objReductor(
  (acc, { typeDef, resolvers }) => ({
    typeDef: [...acc.typeDef, typeDef],
    resolvers: resolvers ? [...acc.resolvers, resolvers] : acc.resolvers,
  }),
  {
    typeDef: [],
    resolvers: [],
  },
)(types);
