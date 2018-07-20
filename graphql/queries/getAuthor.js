const { GraphQLID, GraphQLNonNull } = require('graphql');
const { author } = require('../types');
const { getAuthor } = require('../resolvers');

module.exports = {
  description: 'Gets an author by id',
  type: author,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: getAuthor,
};
