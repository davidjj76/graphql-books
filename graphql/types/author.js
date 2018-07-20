const { GraphQLID, GraphQLObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Author',
  description: 'Describes an author type',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  },
});
