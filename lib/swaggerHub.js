const axios = require('axios')

/**
 * Updates an OpenApi definition in SwaggerHub.
 *
 * @param owner SwaggerHub API owner
 * @param api SwaggerHub API name
 * @param definition OpenAPI definition in yaml format
 * @param apiKey SwaggerHub API key
 */
module.exports = {
  updateSwaggerDefinition: async function(owner, api, definition, apiKey) {
    return axios.post(`https://api.swaggerhub.com/apis/${owner}/${api}`,
      definition, {
      headers: {
        'Authorization': apiKey,
        'Content-Type': 'application/yaml'
      }
    })
  }
}
