from django.urls import path
from .views import *

urlpatterns = [
    path('', CalcView.as_view(), name='calc'),
]
