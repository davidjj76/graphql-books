const {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'BookInput',
  description: 'Describes a book input type',
  fields: () => ({
    title: { type: new GraphQLNonNull(GraphQLString) },
    pages: { type: GraphQLInt },
  }),
});
