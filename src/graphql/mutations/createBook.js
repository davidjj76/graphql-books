const { GraphQLNonNull } = require('graphql');

module.exports = ({ resolvers, types }) => ({
  description: 'Creates a book',
  type: types.book,
  args: {
    book: { type: new GraphQLNonNull(types.bookInput) },
    author: { type: new GraphQLNonNull(types.authorInput) },
  },
  resolve: resolvers.createBook,
});
