const { makeExecutableSchema } = require('graphql-tools');
const { gql } = require('apollo-server');
const { merge } = require('lodash');
const resolvers = require('./resolvers');
const { Repo, repoResolvers } = require('../controllers/repos');

const Query = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs: merge([Query, Repo]),
  resolvers: merge(resolvers, repoResolvers),
  schemaDirectives: {},
});

module.exports = schema;
