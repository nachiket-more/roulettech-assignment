from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    cuisine = serializers.SerializerMethodField()
    ingredients = serializers.SerializerMethodField()
    cooking_method = serializers.SerializerMethodField()

    class Meta:
        model = Recipe
        fields = '__all__'

    def get_cuisine(self, obj):
        return [c.strip() for c in obj.cuisine.split(',')]

    def get_ingredients(self, obj):
        return [i.strip() for i in obj.ingredients.split(',')]

    def get_cooking_method(self, obj):
        return [m.strip() for m in obj.cooking_method.split(',')]