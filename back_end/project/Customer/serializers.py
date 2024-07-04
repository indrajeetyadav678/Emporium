from rest_framework import serializers
from .models import *

class CustomerDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'