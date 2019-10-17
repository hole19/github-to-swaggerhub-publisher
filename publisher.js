const github =  require('./lib/github')
const swaggerHub = require('./lib/swaggerHub')

/**
 * Fetches an OpenAPI definition from a Github repository and publishes it to SwaggerHub
 */
module.exports = {
  publish: async function() {
    let githubOwner = process.env.GITHUB_OWNER
    let githubName = process.env.GITHUB_NAME
    let githubOpenApiPath = process.env.GITHUB_OPENAPI_PATH
    let githubAccessToken = process.env.GITHUB_ACCESS_TOKEN

    let definitionResponse = await github.getSwaggerFile(githubOwner, githubName, githubOpenApiPath, githubAccessToken)
    console.log("Retrieved OpenAPI definition from Github")

    let swaggerHubOwner = process.env.SWAGGERHUB_OWNER
    let swaggerHubApi = process.env.SWAGGERHUB_API
    let swaggerHubApiKey = process.env.SWAGGERHUB_API_KEY

    let updateResponse =  await swaggerHub.updateSwaggerDefinition(swaggerHubOwner, swaggerHubApi, definitionResponse.data, swaggerHubApiKey)
    console.log("Updated definition in SwaggerHub")

    return updateResponse
  }
}
