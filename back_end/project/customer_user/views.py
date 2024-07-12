from django.shortcuts import render
from rest_framework import viewsets
from .models import Customermodel
from .serializers import CustomerSerializer
from rest_framework.permissions import IsAuthenticated


# Create your views here.

class Customerview(viewsets.ModelViewSet):
    queryset = Customermodel.objects.all()
    serializer_class = CustomerSerializer
    permission_classes= [IsAuthenticated]
