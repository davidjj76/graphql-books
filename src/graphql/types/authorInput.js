const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'AuthorInput',
  description: 'Describes an author input type',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
  }),
});
