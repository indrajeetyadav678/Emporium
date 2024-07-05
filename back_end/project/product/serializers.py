from rest_framework import serializers
from .models import Productmodel

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productmodel
        fields = '__all__'
