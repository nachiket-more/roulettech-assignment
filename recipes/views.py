from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
import boto3
from django.conf import settings

class RecipeList(APIView):
    def get(self, request):
        # Initialize a session using your AWS credentials
        session = boto3.Session(
            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
            region_name=settings.AWS_REGION_NAME
        )
        
        # Get the DynamoDB service resource
        dynamodb = session.resource('dynamodb')
        
        # Specify the table
        table = dynamodb.Table(settings.DYNAMODB_TABLE_NAME)
        
        # Fetch all data from the table
        response = table.scan()
        
        # Extract items from the response
        recipes = response.get('Items', [])
        
        return Response(recipes)
    
    
class RecipeDetail(APIView):
    def get(self, request, pk):
        session = boto3.Session(
            aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
            aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
            region_name=settings.AWS_REGION_NAME
        )
        
        dynamodb = session.resource('dynamodb')
        table = dynamodb.Table(settings.DYNAMODB_TABLE_NAME)
        
        try:
            response = table.get_item(
                Key={'id': pk}
            )
            item = response.get('Item')
            
            if item:
                return Response(item)
            else:
                return Response({'error': 'Recipe not found'}, status=status.HTTP_404_NOT_FOUND)
        
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)