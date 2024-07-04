from django.shortcuts import render
from rest_framework import viewsets
from .models import Customer
from .serializers import CustomerDataSerializer

# Create your views here.

class Customerview(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerDataSerializer