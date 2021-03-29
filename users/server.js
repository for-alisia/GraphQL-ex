const express = require('express');
const { graphqlHTTP } = require('express-graphql');

/** Schema */
const schema = require('./schema/schema');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.listen(4000, () => {
  console.log('Listenting on 4000');
});
