const { ApolloError } = require('apollo-server');

const errorHandler = (message, code) => {
  throw new ApolloError(message, code);
};

module.exports = errorHandler;
