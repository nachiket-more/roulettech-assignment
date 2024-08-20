from rest_framework import generics, permissions
from .models import Recipe
from .serializers import RecipeSerializer

# class RecipeCreateView(generics.CreateAPIView):
#     queryset = Recipe.objects.all()
#     serializer_class = RecipeSerializer
#     permission_classes = [permissions.IsAuthenticated]
#     http_method_names = ['post']

class RecipeListView(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    http_method_names = ['get']