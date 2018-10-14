const { gql } = require('apollo-server');
const error = require('../helpers/errors');

const Repo = gql`
  extend type Query {
    reposList: [Repo]
  }
  type Repo {
    name: String
    full_name: String
    url: String
    stargazers_count: Int
    forks_count: Int
  }
`;

const repoResolvers = {
  Query: {
    reposList: async (root, args, context) => {
      const {
        dataSources: { reposApi },
      } = context;
      try {
        const result = await reposApi.getRepoList();
        return result.items;
      }
      catch (e) {
        console.log(e.extensions.response);
        console.log(e.extensions.response.body);
        return error(500, 'Internal Server Error');
      }
    },
  },
};

module.exports = { Repo, repoResolvers };
