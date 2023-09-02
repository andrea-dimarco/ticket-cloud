import boto3
from datetime import datetime
from uuid import uuid4
import json
client = boto3.client('dynamodb')

def lambda_handler(event, context):
    body = json.loads(event['body'])
    user_email = body['user_email']
    n_tickets = int(body['n_tickets'])
    id_event = int(body['id_event'])
    # get available tickets
    data = client.get_item(
      TableName='Events',
      Key = {
          "id": {
              "N": str(id_event)
          }
      }
    )
    available_tickets = int(data['Item']['available_tickets']['N'])
    if (n_tickets <= available_tickets):
      try:
        # update available tickets
        update_item = client.update_item(
            TableName='Events',
            Key={'id': {'N': str(id_event) }},
            UpdateExpression= "SET available_tickets = available_tickets - :decrement",
            ExpressionAttributeValues={
              ':decrement': {'N': str(n_tickets)}
            },
            ReturnValues='ALL_NEW'
          )
        
        for i in range(n_tickets):
          # generate ticket id from timestamp and universally unique id
          ticket_id = datetime.now().strftime('%Y%m-%d%H-%M%S-%f') + str(uuid4())
          data = client.put_item(
            TableName='Tickets',
            Item={
                'id': {
                  'S': str(ticket_id)
                },
                'event_id': {
                  'S': str(id_event)
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
      except Exception as error:
        return error
        response = {
        'statusCode': 200,
        'body': 'Exception unknown!',
        'headers': {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
          },
        }
      
        return response
        
    else:
      response = {
        'statusCode': 200,
        'body': 'Event full!',
        'headers': {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      }
      
      return response