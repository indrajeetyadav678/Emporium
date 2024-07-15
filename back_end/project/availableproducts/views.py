from django.shortcuts import render
from rest_framework import viewsets
from .models import Addproductmodel
from .serializers import AddproductSerializer

class Addproductview(viewsets.ModelViewSet):
    queryset = Addproductmodel.objects.all()
    serializer_class = AddproductSerializer