from rest_framework import serializers
from .models import *

class OrderDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'