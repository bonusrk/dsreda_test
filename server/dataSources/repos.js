const { RESTDataSource } = require('apollo-datasource-rest');

class ReposAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.github.com';
  }

  async getRepoList(payload = {}) {
    const { q = 'javascript', sort = 'desc', per_page = 5 } = payload;
    return this.get('/search/repositories', { q, sort, per_page });
  }
}

module.exports = ReposAPI;
