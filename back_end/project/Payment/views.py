from django.shortcuts import render
from rest_framework import viewsets
from .models import Payment
from .serializers import PaymentDataSerializer

# Create your views here.

class Paymentview(viewsets.ModelViewSet):
    queryset = Payment
    serializer_class = PaymentDataSerializer