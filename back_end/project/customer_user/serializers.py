from rest_framework import serializers
from .models import Customermodel

# write your serialiser here

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customermodel
        fields = '__all__'