from django.shortcuts import render
from rest_framework import viewsets
from .models import Product
from .serializers import ProductDataSerializer

# Create your views here.

class Productview(viewsets.ModelViewSet):
    queryset = Product
    serializer_class = ProductDataSerializer