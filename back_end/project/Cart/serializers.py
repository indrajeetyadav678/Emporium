from rest_framework import serializers
from .models import Cart

class CartDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'