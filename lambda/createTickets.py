import boto3
from datetime import datetime
from uuid import uuid4
import json
client = boto3.client('dynamodb')

def lambda_handler(event, context):
    body = json.loads(event['body']) 
    user_email = body['user_email']
    n_tickets = body['n_tickets']
    id_event = body['id_event']
    print(user_email)
    # generate random id
    for i in range(n_tickets):
        # generate ticket id from timestamp and universally unique id
        ticket_id = datetime.now().strftime('%Y%m-%d%H-%M%S-%f') + str(uuid4())
        data = client.put_item(
        TableName='Tickets',
        Item={
            'id': {
              'S': ticket_id
            },
            'event_id': {
              'N': str(id_event)
            },
            'user_email': {
              'S': user_email
            }
        }
        )
    
    response = {
      'statusCode': 200,
      'body': 'successfully created item!',
      'headers': {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    }
    
    return response