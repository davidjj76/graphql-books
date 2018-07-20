const express = require('express');
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');
const schema = require('./graphql/schema');

const data = require('./data');

const app = express();
app.use(bodyParser.json());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    context: { data },
  }),
);
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
