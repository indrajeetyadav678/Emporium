from django.shortcuts import render
from rest_framework import viewsets
from .models import Cart
from .serializers import CartDataSerializer

# Create your views here.

class Cartview(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartDataSerializer