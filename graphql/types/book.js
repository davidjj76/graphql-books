const {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const author = require('./author');
const { getAuthor } = require('../resolvers');

module.exports = new GraphQLObjectType({
  name: 'Book',
  description: 'Describes a book type',
  fields: {
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    author: { type: author, resolve: getAuthor },
    pages: { type: GraphQLInt },
  },
});
