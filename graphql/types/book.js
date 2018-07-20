const {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const { getAuthor } = require('../resolvers');

module.exports = new GraphQLObjectType({
  name: 'Book',
  description: 'Describes a book type',
  fields: () => {
    const author = require('./author');
    return {
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      author: {
        type: author,
        resolve: getAuthor,
      },
      pages: { type: GraphQLInt },
    };
  },
});
