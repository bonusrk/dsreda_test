import gql from "graphql-tag";

// variables for Repositories list request
const GET_REPOS = gql`
  query Repo($q: String, $per_page: Int, $sort: Sort) {
    reposList(q: $q, per_page: $per_page, sort: $sort) {
      name
      full_name
      url
      stargazers_count
      forks_count
      html_url
    }
  }
`;

export { GET_REPOS };
