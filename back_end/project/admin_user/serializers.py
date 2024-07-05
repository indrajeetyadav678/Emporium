from rest_framework import serializers
from .models import Adminmodel

# write your serialiser here

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adminmodel
        fields = '__all__'