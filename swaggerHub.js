const axios = require('axios')

module.exports = {
  updateSwaggerDefinition: async function(owner, api, definition) {
    return axios.post(`https://api.swaggerhub.com/apis/${owner}/${api}`,
      definition, {
      headers: {
        'Authorization': process.env.SWAGGERHUB_API_KEY,
        'Content-Type': 'application/yaml'
      }
    })
  }
}
