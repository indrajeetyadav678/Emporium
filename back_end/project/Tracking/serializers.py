from rest_framework import serializers
from .models import DeliveryTrackingmodel

class DeliveryTrackingSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveryTrackingmodel
        fields = '__all__'
