from rest_framework import serializers
from .models import *

class TrackingDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tracking
        fields = '__all__'