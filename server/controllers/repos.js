const { gql } = require('apollo-server');
const error = require('../helpers/errors');

const Repo = gql`
  extend type Query {
    reposList(q: String, per_page: Int, sort: Sort): [Repo]
  }
  type Repo {
    name: String
    full_name: String
    url: String
    stargazers_count: Int
    forks_count: Int
    description: String
  }
`;

const repoResolvers = {
  Query: {
    reposList: async (root, args, context) => {
      const {
        dataSources: { reposApi },
      } = context;
      try {
        console.log(args);
        const result = await reposApi.getRepoList(args);
        return result.items;
      }
      catch (e) {
        return error(500, 'Internal Server Error');
      }
    },
  },
};

module.exports = { Repo, repoResolvers };
