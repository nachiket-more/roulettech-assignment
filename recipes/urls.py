from django.urls import path
from . import views

urlpatterns = [
    path('recipes/', views.RecipeList.as_view(), name='recipe-list'),
    path('recipe/<int:pk>/', views.RecipeDetail.as_view(), name='recipe-detail'),
]