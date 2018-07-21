const { GraphQLList } = require('graphql');

module.exports = ({ resolvers, types }) => ({
  description: 'Gets all authors',
  type: new GraphQLList(types.author),
  resolve: resolvers.getAuthors,
});
