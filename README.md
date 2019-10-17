This is a Node.js function that publishes an OpenAPI definition hosted in Github into SwaggerHub

### Configuration
The following environment variables are required:

- **GITHUB_OWNER**: Github repository owner
- **GITHUB_NAME**: Github repository name
- **GITHUB_OPENAPI_PATH**: Relative path and name of the OpenAPI definition file within the repository
- **GITHUB_ACCESS_TOKEN**: Github personal access token
- **SWAGGERHUB_OWNER**: SwaggerHub API owner
- **SWAGGERHUB_API**: SwaggerHub API name
- **SWAGGERHUB_API_KEY**: SwaggerHub API key
