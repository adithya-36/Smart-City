from rest_framework import serializers
from .models import Career, Tender
from .models import News, ConclaveSpeaker, ConclaveRecording, AnniversaryImage, InaugurationImage

class CareerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Career
        fields = '__all__'

class TenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tender
        fields = '__all__'
class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'

class ConclaveSpeakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConclaveSpeaker
        fields = '__all__'

class ConclaveRecordingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConclaveRecording
        fields = '__all__'

class AnniversaryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnniversaryImage
        fields = '__all__'

class InaugurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = InaugurationImage
        fields = '__all__'