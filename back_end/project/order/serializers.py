from rest_framework import serializers
from .models import Ordermodel

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ordermodel
        fields = '__all__'