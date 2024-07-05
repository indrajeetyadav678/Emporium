from django.shortcuts import render
from rest_framework import viewsets
from .models import Productmodel
from .serializers import ProductSerializer

# Create your views here.

class Productview(viewsets.ModelViewSet):
    queryset = Productmodel.objects.all()
    serializer_class = ProductSerializer