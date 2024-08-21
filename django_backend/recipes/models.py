from django.db import models

class Recipe(models.Model):
    id = models.AutoField(primary_key=True)  # AutoField generates integers
    cooking_method = models.CharField(max_length=1000)
    cuisine = models.CharField(max_length=1000)
    image = models.CharField(max_length=1000)
    ingredients = models.CharField(max_length=1000)
    prep_time = models.CharField(max_length=1000)
    recipe_name = models.CharField(max_length=1000)
    serves = models.CharField(max_length=1000)
    tags = models.CharField(max_length=1000)

    def __str__(self):
        return self.recipe_name
