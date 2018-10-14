const { ApolloServer } = require('apollo-server');
const schema = require('./src/schema');
const dataSources = require('./dataSources');

const server = new ApolloServer({
  schema,
  // add our dataSource to context
  dataSources: () => dataSources,
  // prettify gql error a little bit, to show full trace in dev mode only
  formatError: (error) => {
    if (process.env.NODE_ENV === 'development') return error;
    const { message, extensions, path } = error;
    return {
      message,
      path,
      code: extensions.code,
    };
  },
});

server
  .listen({ port: 4000 })
  // eslint-disable-next-line no-console
  .then(() => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
