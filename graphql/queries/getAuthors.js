const { GraphQLList } = require('graphql');

module.exports = ({ types }) => ({
  description: 'Gets all authors',
  type: new GraphQLList(types.author),
});
