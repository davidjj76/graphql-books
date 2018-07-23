const { ApolloServer, gql } = require('apollo-server');
// const { typeDefs, resolvers } = require('./graphql');
const data = require('./db')('sqlite:./db/books.sqlite3');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers, context: { data } });

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
