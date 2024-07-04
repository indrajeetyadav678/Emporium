from django.shortcuts import render
from rest_framework import viewsets
from .models import Tracking
from .serializers import TrackingDataSerializer

# Create your views here.

class Trackingview(viewsets.ModelViewSet):
    queryset = Tracking.objects.all()
    serializer_class = TrackingDataSerializer