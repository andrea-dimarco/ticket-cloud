import json
import boto3

client = boto3.client('dynamodb')

def lambda_handler(event, context):
    #return "AAAAAAAAAAAAAAAA", event
    id = event["queryStringParameters"]["id"]
    
    # query on the Table using the GSI
    query_params = {
        'TableName': "Tickets",
        'IndexName': "event_id-index",
        'KeyConditionExpression': 'event_id = :val',
        'ExpressionAttributeValues': {
            ':val': {'S': str(id)}
        },
        'Select': 'COUNT'
    }
    
    # Perform the query
    query = client.query(**query_params)
    n_tickets = query["Count"]
    data = client.get_item(
        TableName='Events',
        Key = {
            "id": {
                "N": id
            }
        }
    )
    
    capacity = int(data['Item']['capacity']['S'])
    capacity -= n_tickets
    data['Item']['capacity']['S'] = str(capacity)
    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps(data),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
        
    }
