from django.shortcuts import render
from rest_framework import viewsets
from .models import Paymentmodel
from .serializers import PaymentSerializer

# Create your views here.

class Paymentview(viewsets.ModelViewSet):
    queryset = Paymentmodel.objects.all()
    serializer_class = PaymentSerializer