const {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const { getBooks } = require('../resolvers');

module.exports = new GraphQLObjectType({
  name: 'Author',
  description: 'Describes an author type',
  fields: () => {
    const book = require('./book');
    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      books: {
        type: new GraphQLList(book),
        resolve: getBooks,
      },
    };
  },
});
