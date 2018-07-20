const { GraphQLID, GraphQLNonNull } = require('graphql');
const { book } = require('../types');
const { getBook } = require('../resolvers');

module.exports = {
  description: 'Get a book by id',
  type: book,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: getBook,
};
