const { ApolloServer } = require('apollo-server');
const schema = require('./src/schema');
const dataSources = require('./dataSources');

const server = new ApolloServer({
  schema,
  dataSources: () => dataSources,
  // prettify gql error a little bit
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
