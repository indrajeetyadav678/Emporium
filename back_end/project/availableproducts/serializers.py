from rest_framework import serializers
from .models import Addproductmodel

class AddproductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Addproductmodel
        fields = '__all__'