from django.shortcuts import render
from rest_framework import viewsets
from .models import Reviewsmodel
from .serializers import ReviewsSerializer

# Create your views here.

class Reviewview(viewsets.ModelViewSet):
    queryset = Reviewsmodel.objects.all()
    serializer_class = ReviewsSerializer