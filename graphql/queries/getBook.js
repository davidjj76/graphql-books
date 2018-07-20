const { GraphQLNonNull, GraphQLID } = require('graphql');

module.exports = ({ types }) => ({
  description: 'Gets a book by id',
  type: types.book,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
});
