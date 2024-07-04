from django.shortcuts import render
from rest_framework import viewsets
from .models import Order
from .serializers import OrderDataSerializer

# Create your views here.

class Orderview(viewsets.ModelViewSet):
    queryset = Order
    serializer_class = OrderDataSerializer