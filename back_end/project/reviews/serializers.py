from rest_framework import serializers
from .models import Reviewsmodel

class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviewsmodel
        fields = '__all__'