const github =  require('./github')
const swaggerHub =  require('./swaggerHub')

module.exports = {
  execute: async function() {
    let githubOwner = process.env.GITHUB_OWNER
    let githubName = process.env.GITHUB_NAME
    let githubOpenApiPath = process.env.GITHUB_OPENAPI_PATH

    let definitionResponse = await github.getSwaggerFile(githubOwner, githubName, githubOpenApiPath)
    console.log("Retrieved OpenAPI definition from Github")

    let swaggerHubOwner = process.env.SWAGGERHUB_OWNER
    let swaggerHubApi = process.env.SWAGGERHUB_API

    let updateResponse =  await swaggerHub.updateSwaggerDefinition(swaggerHubOwner, swaggerHubApi, definitionResponse.data)
    console.log("Updated definition in SwaggerHub")

    return updateResponse
  }
}
