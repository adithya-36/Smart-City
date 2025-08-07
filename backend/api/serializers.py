from rest_framework import serializers
from .models import (
    News, Career, Tender, ConclaveSpeaker, GovernmentOrder, ContactMessage,
    ConclaveRecording, AnniversaryImage, InaugurationImage, Complaint, PollFeedback,
    MonthlyProgressReport, Internship, PhotoAlbum, Photo, Video, MediaItem, EventItem,
    ContactInfo, BoardMember, CEO, Staff, Document, Official, OngoingProject,
    ProjectImage, CompletedProject, CompletedProjectImage, NavigationItem, PageContent,
    Visitor, CareerResource
)
from django.utils import timezone

# ----------------------------
# Career & CareerResource
# ----------------------------

class CareerResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = CareerResource
        fields = ['id', 'label', 'pdf', 'link']

class CareerSerializer(serializers.ModelSerializer):
    resources = serializers.SerializerMethodField()

    class Meta:
        model = Career
        fields = '__all__'

    def get_resources(self, obj):
        resource_data = CareerResourceSerializer(obj.resources.all(), many=True).data

        if obj.pdf:
            resource_data.insert(0, {
                'id': -1,
                'label': 'Download',
                'pdf': obj.pdf.url if obj.pdf else None,
                'link': None
            })

        return resource_data

# ----------------------------
# Tender
# ----------------------------

class TenderSerializer(serializers.ModelSerializer):
    status = serializers.SerializerMethodField()

    class Meta:
        model = Tender
        fields = ['id', 'no', 'title', 'pdf', 'last_date_to_submit', 'status']

    def get_status(self, obj):
        if obj.last_date_to_submit:
            return 'Closed' if timezone.now() > obj.last_date_to_submit else 'Open'
        return 'Unknown'

# ----------------------------
# News
# ----------------------------

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'

# ----------------------------
# Conclave
# ----------------------------

class ConclaveSpeakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConclaveSpeaker
        fields = '__all__'

class ConclaveRecordingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConclaveRecording
        fields = '__all__'

# ----------------------------
# Event Media
# ----------------------------

class AnniversaryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnniversaryImage
        fields = '__all__'

class InaugurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = InaugurationImage
        fields = '__all__'

# ----------------------------
# Government Orders
# ----------------------------

class GovernmentOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = GovernmentOrder
        fields = ['id', 'title', 'date', 'pdf']

# ----------------------------
# Contact / Complaint / Poll / Feedback
# ----------------------------

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

# ----------------------------
# Monthly Progress Report
# ----------------------------

class MonthlyProgressReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonthlyProgressReport
        fields = ['id', 'month', 'year', 'file', 'uploaded_at']

# ----------------------------
# Internship
# ----------------------------

class InternshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Internship
        fields = '__all__'

# ----------------------------
# Photo Albums
# ----------------------------

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ['id', 'image', 'caption']

class PhotoAlbumSerializer(serializers.ModelSerializer):
    photos = PhotoSerializer(many=True, read_only=True)

    class Meta:
        model = PhotoAlbum
        fields = ['id', 'title', 'thumbnail', 'photos']

# ----------------------------
# Video
# ----------------------------

class VideoSerializer(serializers.ModelSerializer):
    youtube_id = serializers.ReadOnlyField()

    class Meta:
        model = Video
        fields = ['id', 'title', 'youtube_url', 'youtube_id']

# ----------------------------
# Media / Event Items
# ----------------------------

class MediaItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MediaItem
        fields = '__all__'

class EventItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventItem
        fields = '__all__'

# ----------------------------
# Contact Info
# ----------------------------

class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = '__all__'

# ----------------------------
# Board Members / CEO / Staff / Official
# ----------------------------

class BoardMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = BoardMember
        fields = ['id', 'name', 'position', 'field', 'image']

class CEOSerializer(serializers.ModelSerializer):
    joining_date = serializers.DateField(format="%d-%m-%Y")
    relieving_date = serializers.DateField(format="%d-%m-%Y", allow_null=True)

    class Meta:
        model = CEO
        fields = '__all__'

class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = '__all__'

class OfficialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Official
        fields = ['id', 'name', 'title', 'description', 'image', 'linkedin', 'priority']

# ----------------------------
# Documents
# ----------------------------

class DocumentSerializer(serializers.ModelSerializer):
    file = serializers.SerializerMethodField()

    class Meta:
        model = Document
        fields = ['id', 'title', 'file']

    def get_file(self, obj):
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.file.url)
        return obj.file.url

# ----------------------------
# Projects
# ----------------------------

class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['id', 'image', 'caption']

class OngoingProjectSerializer(serializers.ModelSerializer):
    images = ProjectImageSerializer(many=True, read_only=True)

    class Meta:
        model = OngoingProject
        fields = ['id', 'project_id', 'project_name', 'scm', 'target_completion', 'images']

class CompletedProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompletedProjectImage
        fields = ['id', 'image', 'caption']

class CompletedProjectSerializer(serializers.ModelSerializer):
    images = CompletedProjectImageSerializer(many=True, read_only=True)

    class Meta:
        model = CompletedProject
        fields = ['id', 'project_name', 'amount', 'images']

# ----------------------------
# Dynamic Pages / Navigation
# ----------------------------

class NavigationItemSerializer(serializers.ModelSerializer):
    dropdown = serializers.SerializerMethodField()

    class Meta:
        model = NavigationItem
        fields = ['id', 'name', 'href', 'parent', 'dropdown']

    def get_dropdown(self, obj):
        children = obj.dropdown.all()
        return NavigationItemSerializer(children, many=True).data if children else None

class PageContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PageContent
        fields = '__all__'

# ----------------------------
# Visitor Analytics
# ----------------------------

class VisitorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visitor
        fields = ['count']
