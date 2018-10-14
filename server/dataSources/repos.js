const { RESTDataSource } = require('apollo-datasource-rest');

class ReposAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.github.com';
  }

  async getRepoList() {
    return this.get('/search/repositories', {
      q: 'javascript',
      sort: 'stars',
      per_page: 5,
    });
  }
}

module.exports = ReposAPI;
