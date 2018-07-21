const { GraphQLNonNull } = require('graphql');

module.exports = ({ resolvers, types }) => ({
  description: 'Creates an author',
  type: types.author,
  args: {
    author: { type: new GraphQLNonNull(types.authorInput) },
  },
  resolve: resolvers.createAuthor,
});
