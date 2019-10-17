import executor from 'main'

exports.handler = async (event) => {

  console.log("Received publish event")

  let response

  try {
    let executeRes = await executor.execute()
    console.log("Published successfully")

    response = {
      statusCode: 200,
      body: JSON.stringify('Updated successfully')
    }
  } catch(err) {
    console.err("Failed to publish", err)

    response = {
      statusCode: 500,
      body: JSON.stringify(err)
    }
  }

  return response
}
