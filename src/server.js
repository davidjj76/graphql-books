const { ApolloServer } = require('apollo-server');
const schema = require('./graphql/schema');
const data = require('./db')('sqlite:./db/books.sqlite3');
const services = require('./services')(data);

const server = new ApolloServer({ schema, context: { services } });

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
