from django.urls import path
from . import views

urlpatterns = [
    path('', views.Home.as_view(), name='home'),
    path('recipes/', views.RecipeList.as_view(), name='recipe-list'),
    path('recipe/<int:pk>/', views.RecipeDetail.as_view(), name='recipe-detail'),
]