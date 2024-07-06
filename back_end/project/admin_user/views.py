from django.shortcuts import render
from rest_framework import viewsets
from .models import Adminmodel
from .serializers import AdminSerializer

# Create your views here.

class Adminview(viewsets.ModelViewSet):
    queryset = Adminmodel.objects.all()
    serializer_class = AdminSerializer