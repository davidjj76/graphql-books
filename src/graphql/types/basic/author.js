const {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const { getBooks } = require('../../resolvers');

module.exports = new GraphQLObjectType({
  name: 'Author',
  description: 'Describes an author type',
  fields: () => {
    const book = require('./book');
    return {
      id: { type: new GraphQLNonNull(GraphQLID) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      books: {
        type: new GraphQLList(book),
        resolve: getBooks,
      },
    };
  },
});
