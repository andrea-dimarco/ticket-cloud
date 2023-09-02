import json
import boto3

client = boto3.client('dynamodb')

def lambda_handler(event, context):
    id = str(event["queryStringParameters"]["id"])
    
    query = client.get_item(
        TableName='Events',
        Key = {
            "id": {
                "N": id
            }
        }
    )
    data = query['Item'].get('available_tickets', {}).get('N')
    return {
        'statusCode': 200,
        'body': json.dumps(data),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
        
    }

