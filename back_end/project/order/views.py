from django.shortcuts import render
from rest_framework import viewsets
from .models import Ordermodel
from .serializers import OrderSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class Orderview(viewsets.ModelViewSet):
    queryset = Ordermodel.objects.all()
    serializer_class = OrderSerializer
    permission_classes= [IsAuthenticated]