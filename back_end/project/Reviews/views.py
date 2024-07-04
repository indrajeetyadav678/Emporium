from django.shortcuts import render
from rest_framework import viewsets
from .models import Reviews
from .serializers import ReviewsDataSerializer

# Create your views here.

class Reviewview(viewsets.ModelViewSet):
    queryset = Reviews
    serializer_class = ReviewsDataSerializer