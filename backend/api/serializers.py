from rest_framework import serializers
from .models import News,Career, Tender, ConclaveSpeaker,GovernmentOrder, ContactMessage, ConclaveRecording, AnniversaryImage, InaugurationImage,Complaint,PollFeedback,MonthlyProgressReport,Internship,PhotoAlbum, Photo,Video, MediaItem, EventItem, ContactInfo, BoardMember


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

class GovernmentOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = GovernmentOrder
        fields = ['id', 'title', 'date', 'pdf']

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'

class ComplaintSerializer(serializers.ModelSerializer):
    class Meta:
        model = Complaint
        fields = '__all__'

class PollFeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = PollFeedback
        fields = ['id', 'rating', 'submitted_at']

class MonthlyProgressReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonthlyProgressReport
        fields = ['id', 'month', 'file', 'uploaded_at']


class InternshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Internship
        fields = '__all__'

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ['id', 'image', 'caption']

class PhotoAlbumSerializer(serializers.ModelSerializer):
    photos = PhotoSerializer(many=True, read_only=True)

    class Meta:
        model = PhotoAlbum
        fields = ['id', 'title', 'thumbnail', 'photos']

class VideoSerializer(serializers.ModelSerializer):
    youtube_id = serializers.ReadOnlyField()

    class Meta:
        model = Video
        fields = ['id', 'title', 'youtube_url', 'youtube_id']

class MediaItemSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)

    class Meta:
        model = MediaItem
        fields = '__all__'

class EventItemSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)

    class Meta:
        model = EventItem
        fields = '__all__'

class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = '__all__'

class BoardMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = BoardMember
        fields = ['id', 'name', 'position', 'field', 'image']