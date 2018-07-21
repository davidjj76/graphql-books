const { GraphQLNonNull, GraphQLID } = require('graphql');

module.exports = ({ resolvers, types }) => ({
  description: 'Gets an author by id',
  type: types.basic.author,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: resolvers.getAuthor,
});
