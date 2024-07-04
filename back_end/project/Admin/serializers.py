from rest_framework import serializers
from .models import Adminmodel

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adminmodel
        fields = '__all__'