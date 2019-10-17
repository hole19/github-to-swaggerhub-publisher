const axios = require('axios')

module.exports = {
  updateSwaggerDefinition: async function(owner, api, definition) {
    return axios.post(`https://api.swaggerhub.com/apis/${owner}/${api}`, {
      definition: definition
    }, {
      Authorization: process.env.SWAGGERHUB_API_KEY
    })
  }
}
