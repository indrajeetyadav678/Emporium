from rest_framework import serializers
from .models import Cartmodel

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cartmodel
        fields = '__all__'