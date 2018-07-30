const { ApolloServer } = require('apollo-server');
const schema = require('./graphql/schema');
const data = require('./db')('sqlite:./db/books.sqlite3');

const server = new ApolloServer({ schema, context: { data } });

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
