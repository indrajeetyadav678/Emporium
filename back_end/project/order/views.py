from django.shortcuts import render
from rest_framework import viewsets
from .models import Ordermodel
from .serializers import OrderSerializer

# Create your views here.

class Orderview(viewsets.ModelViewSet):
    queryset = Ordermodel.objects.all()
    serializer_class = OrderSerializer