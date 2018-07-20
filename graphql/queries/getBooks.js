const { GraphQLList } = require('graphql');

module.exports = ({ types }) => ({
  description: 'Gets all books',
  type: new GraphQLList(types.book),
});
