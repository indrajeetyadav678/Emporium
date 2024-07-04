from django.shortcuts import render
from rest_framework import viewsets
from .models import AdminData
from .serializers import AdminDataSerializer

# Create your views here.

class Adminview(viewsets.ModelViewSet):
    queryset = AdminData
    serializer_class = AdminDataSerializer