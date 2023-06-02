from django.urls import path
from .views import get_cep

urlpatterns = [
    path('cep/<str:cep>/', get_cep, name='get_cep'),
]