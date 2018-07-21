const { GraphQLList } = require('graphql');

module.exports = ({ resolvers, types }) => ({
  description: 'Gets all books',
  type: new GraphQLList(types.basic.book),
  resolve: resolvers.getBooks,
});
