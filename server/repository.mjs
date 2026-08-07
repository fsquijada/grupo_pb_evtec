import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { randomUUID } from 'crypto';

// Cliente dynamo
const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = process.env.TABLE_NAME || 'subscriptions';

// Funcion para guardar subscripciones
export async function saveSubscription({ email, name, ipAddress, userAgent }) {
  const command = new PutCommand({
    TableName: TABLE_NAME,
    Item: {
      email,
      subscription_id: randomUUID(),
      name,
      ip_address: ipAddress,
      user_agent: userAgent,
      created_at: new Date().toISOString(),
    },
    ConditionExpression: 'attribute_not_exists(email)',
  });

  return await docClient.send(command);
}
