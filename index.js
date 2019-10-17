const executor = require('./main')

exports.handler = async (event) => {

  console.log("Received publish event")

  let executeRes = await executor.execute()
  console.log("Published successfully")

  let response = {
    statusCode: 200,
    body: JSON.stringify('Updated successfully')
  }

  return response
}
