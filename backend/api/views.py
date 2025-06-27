from rest_framework import viewsets
from .models import (
    Career,
    Tender,
    News,
    ConclaveSpeaker,
    ConclaveRecording,
    AnniversaryImage,
    InaugurationImage,
)

from .serializers import (
    CareerSerializer,
    TenderSerializer,
    NewsSerializer,
    ConclaveSpeakerSerializer,
    ConclaveRecordingSerializer,
    AnniversaryImageSerializer,
    InaugurationSerializer,
)


class CareerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Career.objects.all().order_by('-posted_on')
    serializer_class = CareerSerializer


class TenderViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Tender.objects.all().order_by('-uploaded_on')
    serializer_class = TenderSerializer


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
