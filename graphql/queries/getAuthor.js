const { GraphQLNonNull, GraphQLID } = require('graphql');

module.exports = ({ types }) => ({
  description: 'Gets an author by id',
  type: types.author,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
});
