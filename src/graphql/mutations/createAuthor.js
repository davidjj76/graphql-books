const { GraphQLNonNull, GraphQLString } = require('graphql');

module.exports = ({ resolvers, types }) => ({
  description: 'Creates an author',
  type: types.basic.author,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: resolvers.createAuthor,
});
