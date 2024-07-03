from rest_framework import serializers
from .models import *

class ReviewsDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = '__all__'