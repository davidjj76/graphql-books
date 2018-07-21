const {
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
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
      id: { type: new GraphQLNonNull(GraphQLID) },
      title: { type: new GraphQLNonNull(GraphQLString) },
      author: {
        type: new GraphQLNonNull(author),
        resolve: getAuthor,
      },
      pages: { type: new GraphQLNonNull(GraphQLInt) },
    };
  },
});
