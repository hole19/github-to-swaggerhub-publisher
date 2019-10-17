const axios = require('axios')

/**
 * Fetches the OpenAPI definition from a Github repository.
 *
 * @param owner Github repository owner
 * @param repo Github repository name
 * @param filepathAndName relative path and name of the OpenAPI definition file within the repository
 * @param token Github personal access token
 */
module.exports = {
  getSwaggerFile: async function(owner, repo, filepathAndName, token) {
    return axios.get(`https://api.github.com/repos/${owner}/${repo}/contents/${filepathAndName}`, {
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.3.raw',
        'User-Agent': owner
      }
    })
  }
}
