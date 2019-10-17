const axios = require('axios')

module.exports = {
  getSwaggerFile: async function(owner, repo, filepathAndName) {
    return axios.get(`https://api.github.com/repos/${owner}/${repo}/contents/${filepathAndName}`, {
      headers: {
        'Authorization': `token ${process.env.GITHUB_ACCESS_TOKEN}`,
        'Accept': 'application/vnd.github.3.raw',
        'User-Agent': owner
      }
    })
  }
}
