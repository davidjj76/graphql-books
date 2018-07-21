const { GraphQLNonNull, GraphQLID } = require('graphql');

module.exports = ({ resolvers, types }) => ({
  description: 'Gets a book by id',
  type: types.book,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: resolvers.getBook,
});
