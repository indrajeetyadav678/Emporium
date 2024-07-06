from django.shortcuts import render
from rest_framework import viewsets
from .models import Customermodel
from .serializers import CustomerSerializer

# Create your views here.

class Customerview(viewsets.ModelViewSet):
    queryset = Customermodel.objects.all()
    serializer_class = CustomerSerializer