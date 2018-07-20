const { GraphQLList } = require('graphql');
const { book } = require('../types');
const { getBooks } = require('../resolvers');

module.exports = {
  description: 'Get all books',
  type: new GraphQLList(book),
  resolve: getBooks,
};
