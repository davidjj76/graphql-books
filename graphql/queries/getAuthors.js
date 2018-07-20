const { GraphQLList } = require('graphql');
const { author } = require('../types');
const { getAuthors } = require('../resolvers');

module.exports = {
  description: 'Gets all authors',
  type: new GraphQLList(author),
  resolve: getAuthors,
};
