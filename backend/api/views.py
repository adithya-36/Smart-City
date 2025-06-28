from rest_framework import viewsets,generics
from rest_framework import mixins
from .models import (
    Career,
    Tender,
    News,
    ConclaveSpeaker,
    ConclaveRecording,
    AnniversaryImage,
    InaugurationImage,
    GovernmentOrder,
    ContactMessage,
    Complaint,
    PollFeedback,
    MonthlyProgressReport,
    Internship,
    PhotoAlbum
)

from .serializers import (
    CareerSerializer,
    TenderSerializer,
    NewsSerializer,
    ConclaveSpeakerSerializer,
    ConclaveRecordingSerializer,
    AnniversaryImageSerializer,
    InaugurationSerializer,
    GovernmentOrderSerializer,
    ContactMessageSerializer,
    ComplaintSerializer,
    PollFeedbackSerializer,
    MonthlyProgressReportSerializer,
    InternshipSerializer,
    PhotoAlbumSerializer
)
class CareerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Career.objects.all().order_by('-posted_on')
    serializer_class = CareerSerializer


class TenderViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Tender.objects.all().order_by('-uploaded_on')
    serializer_class = TenderSerializer

class GovernmentOrderViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GovernmentOrder.objects.all().order_by('-date')
    serializer_class = GovernmentOrderSerializer

class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all().order_by('-date')
    serializer_class = NewsSerializer


class ConclaveSpeakerViewSet(viewsets.ModelViewSet):
    queryset = ConclaveSpeaker.objects.all()
    serializer_class = ConclaveSpeakerSerializer


class ConclaveRecordingViewSet(viewsets.ModelViewSet):
    queryset = ConclaveRecording.objects.all().order_by('-date')
    serializer_class = ConclaveRecordingSerializer


class AnniversaryImageViewSet(viewsets.ModelViewSet):
    queryset = AnniversaryImage.objects.all()
    serializer_class = AnniversaryImageSerializer


class InaugurationImageViewSet(viewsets.ModelViewSet):
    queryset = InaugurationImage.objects.all()
    serializer_class = InaugurationSerializer

class LatestNewsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = News.objects.filter(type='news').order_by('-date')[:6]
    serializer_class = NewsSerializer

class ContactMessageViewSet(mixins.CreateModelMixin,
                            viewsets.GenericViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

class ComplaintViewSet(viewsets.ModelViewSet):
    queryset = Complaint.objects.all().order_by('-submitted_at')
    serializer_class = ComplaintSerializer

class PollFeedbackCreateView(generics.CreateAPIView):
    queryset = PollFeedback.objects.all()
    serializer_class = PollFeedbackSerializer

class MonthlyProgressReportViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MonthlyProgressReport.objects.all().order_by('-uploaded_at')
    serializer_class = MonthlyProgressReportSerializer

class InternshipViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Internship.objects.all().order_by('-id')
    serializer_class = InternshipSerializer

class PhotoAlbumViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PhotoAlbum.objects.prefetch_related('photos').all()
    serializer_class = PhotoAlbumSerializer