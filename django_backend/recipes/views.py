from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
import boto3
from django.conf import settings
from django.http import HttpResponse



class Home(APIView):
    def get(self, request):
        return HttpResponse("Welcome to the Recipe API")

class RecipeList(APIView):
    def get(self, request):
        # Create a DynamoDB client without specifying credentials explicitly
        dynamodb = boto3.resource('dynamodb', region_name=settings.AWS_REGION_NAME)
        
        
        # Specify the table
        table = dynamodb.Table(settings.DYNAMODB_TABLE_NAME)
        
        # Fetch all data from the table
        try:
            response = table.scan()
            recipes = response.get('Items', [])
            return Response(recipes)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    
class RecipeDetail(APIView):
    def get(self, request, pk):
        # Create a DynamoDB client without specifying credentials explicitly
        dynamodb = boto3.resource('dynamodb', region_name=settings.AWS_REGION_NAME)
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
