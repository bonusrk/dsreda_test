const { RESTDataSource } = require('apollo-datasource-rest');

class ReposAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.github.com';
  }

  /**
   *
   * @param q String : search query, look at links about search below
   * @param sort String enum ['asc', 'desc'] : sorting order
   * @param per_page Int : documents per page number
   */
  async getRepoList({ q = 'javascript', sort = 'desc', per_page = 5 }) {
    // info 'bout search queries for git API https://developer.github.com/v3/search/
    // Search syntax docs https://help.github.com/articles/understanding-the-search-syntax/
    // repo search docs https://help.github.com/articles/searching-for-repositories/
    return this.get('/search/repositories', { q, sort, per_page });
  }
}

module.exports = ReposAPI;
