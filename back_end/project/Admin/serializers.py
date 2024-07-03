from rest_framework import serializers
from .models import *

class AdminDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminData
        fields = '__all__'