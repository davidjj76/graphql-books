const { GraphQLNonNull, GraphQLString } = require('graphql');
const { author } = require('../types');
const { createAuthor } = require('../resolvers');

module.exports = {
  description: 'Creates an author',
  type: author,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: createAuthor,
};
