const { GraphQLNonNull, GraphQLString } = require('graphql');

module.exports = ({ types }) => ({
  description: 'Creates an author',
  type: types.author,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
  },
});
