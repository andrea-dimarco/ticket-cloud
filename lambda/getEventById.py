import json
import boto3

client = boto3.client('dynamodb')

def lambda_handler(event, context):
    id = event['queryStringParameters']['id']
    
    data = client.get_item(
        TableName='Events',
        Key = {
            'id': {
                'N': id
            }        
        }
    )
    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps(data),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
        
    }
