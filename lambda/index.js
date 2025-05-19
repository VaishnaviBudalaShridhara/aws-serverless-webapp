const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.TABLE_NAME || "Tasks";

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const taskId = Date.now().toString();

  await db.put({
    TableName: tableName,
    Item: {
      taskId,
      task: body.task
    }
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Task saved", taskId }),
  };
};
