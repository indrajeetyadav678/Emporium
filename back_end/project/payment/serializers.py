from rest_framework import serializers
from .models import Paymentmodel

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paymentmodel
        fields = '__all__'