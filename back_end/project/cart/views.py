from django.shortcuts import render
from rest_framework import viewsets
from .models import Cartmodel
from .serializers import CartSerializer

# Create your views here.

class Cartview(viewsets.ModelViewSet):
    queryset = Cartmodel.objects.all()
    serializer_class = CartSerializer

