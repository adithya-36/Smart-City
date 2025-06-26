from rest_framework import serializers
from .models import Career, Tender

class CareerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Career
        fields = '__all__'

class TenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tender
        fields = '__all__'
