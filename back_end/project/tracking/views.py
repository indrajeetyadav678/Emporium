from django.shortcuts import render
from rest_framework import viewsets
from .models import DeliveryTrackingmodel
from .serializers import DeliveryTrackingSerializer

# Create your views here.

class DeliveryTrackingview(viewsets.ModelViewSet):
    queryset = DeliveryTrackingmodel.objects.all()
    serializer_class = DeliveryTrackingSerializer