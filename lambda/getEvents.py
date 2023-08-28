import json
import boto3
from boto3.dynamodb.types import TypeDeserializer
client = boto3.client('dynamodb')

# converts dynamodb types to json
def deserialize_item(item, d = TypeDeserializer()):
    return {k: d.deserialize(value=v) for k,v in item.items()}

#workaround for Decimal type
from decimal import Decimal
class DecimalEncoder(json.JSONEncoder):
    def default(self,obj):
        if isinstance(obj, Decimal):
            return str(obj)
        return json.JSONEncoder.default(self,obj)

def lambda_handler(event, context):
    # TODO implement
    data = client.scan(
    TableName='Events'
    )
    print(data)
    new_data = [deserialize_item(item) for item in data['Items']]
    response = {
      'statusCode': 200,
      'body': json.dumps(new_data, cls=DecimalEncoder),
      'headers': {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    }
    
    return response