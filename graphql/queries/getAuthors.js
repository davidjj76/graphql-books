const { GraphQLList } = require('graphql');
const { author } = require('../types');
const { getAuthors } = require('../resolvers');

module.exports = {
  description: 'Get all authors',
  type: new GraphQLList(author),
  resolve: getAuthors,
};
