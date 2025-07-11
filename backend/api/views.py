from rest_framework import viewsets, generics, filters
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Q
from rest_framework.response import Response
from rest_framework import mixins
from rest_framework import status
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
    PhotoAlbum,
    Video,
    MediaItem, EventItem, ContactInfo,
    BoardMember,
    CEO,
    Staff,
    Document,
    Official
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
    PhotoAlbumSerializer,
    VideoSerializer,
    MediaItemSerializer, EventItemSerializer, ContactInfoSerializer,
    BoardMemberSerializer,
    CEOSerializer,
    StaffSerializer,
    DocumentSerializer,
    OfficialSerializer

)


class CareerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Career.objects.all().order_by('-posted_on')
    serializer_class = CareerSerializer


class TenderViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Tender.objects.all().order_by('-last_date_to_submit')

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
    queryset = Internship.objects.all().order_by('-date')
    serializer_class = InternshipSerializer


class PhotoAlbumViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PhotoAlbum.objects.prefetch_related('photos').all()
    serializer_class = PhotoAlbumSerializer


class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer


class MediaItemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MediaItem.objects.all().order_by('-date')
    serializer_class = MediaItemSerializer


class EventItemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = EventItem.objects.all().order_by('-date')
    serializer_class = EventItemSerializer


class ContactInfoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer


class SearchView(APIView):
    def get(self, request, *args, **kwargs):
        query = request.GET.get('query', '').strip().lower()
        results = {}

        # Keyword groups
        tender_keywords = ['tender', 'tenders']
        document_keywords = ['document', 'documents', 'pdf', 'download', 'downloads', 'report']
        career_keywords = ['career', 'careers']
        mpr_keywords = ['monthly report', 'mpr', 'progress']
        annual_report_keywords = ['annual report', 'financial report']
        tulip_keywords = ['tulip', 'tulip internship']
        beneficiary_keywords = ['beneficiary', 'beneficiary details']

        # Careers
        if query in career_keywords:
            results['careers'] = CareerSerializer(Career.objects.all(), many=True).data
        else:
            results['careers'] = CareerSerializer(Career.objects.filter(
                Q(title__icontains=query) | Q(status__icontains=query)
            ), many=True).data

        # Tenders
        if query in tender_keywords:
            results['tenders'] = TenderSerializer(Tender.objects.all(), many=True).data
        else:
            results['tenders'] = TenderSerializer(Tender.objects.filter(
                Q(title__icontains=query) | Q(no__icontains=query)
            ), many=True).data

        # Documents
        results['documents'] = DocumentSerializer(
            Document.objects.all() if query in document_keywords else
            Document.objects.filter(Q(title__icontains=query)),
            many=True
        ).data

        # Monthly Progress Reports (MPR)
        if query in mpr_keywords:
            results['mpr'] = MonthlyProgressReportSerializer(MonthlyProgressReport.objects.all(), many=True).data
        else:
            results['mpr'] = MonthlyProgressReportSerializer(MonthlyProgressReport.objects.filter(
                Q(month__icontains=query)
            ), many=True).data

        # Annual Reports → trigger Financials page
        if query in annual_report_keywords:
            results['financials'] = []  # Trigger link to Financials page
        else:
            results['financials'] = []

        # Tulip Internship → redirect to page
        if query in tulip_keywords:
            results['tulip'] = []
        else:
            results['tulip'] = []

        # Beneficiary Details → redirect to page
        if query in beneficiary_keywords:
            results['beneficiary'] = []
        else:
            results['beneficiary'] = []

        # Additional content (unchanged)
        results.update({
            'news': NewsSerializer(News.objects.filter(
                Q(title__icontains=query) | Q(excerpt__icontains=query)
            ), many=True).data,

            'media': MediaItemSerializer(MediaItem.objects.filter(
                Q(title__icontains=query)
            ), many=True).data,

            'events': EventItemSerializer(EventItem.objects.filter(
                Q(title__icontains=query)
            ), many=True).data,

            'orders': GovernmentOrderSerializer(GovernmentOrder.objects.filter(
                Q(title__icontains=query)
            ), many=True).data,

            'conclave_speakers': ConclaveSpeakerSerializer(ConclaveSpeaker.objects.filter(
                Q(name__icontains=query) | Q(designation__icontains=query)
            ), many=True).data,

            'recordings': ConclaveRecordingSerializer(ConclaveRecording.objects.filter(
                Q(title__icontains=query)
            ), many=True).data,

            'anniversary_images': AnniversaryImageSerializer(AnniversaryImage.objects.filter(
                Q(alt__icontains=query)
            ), many=True).data,

            'inauguration_images': InaugurationSerializer(InaugurationImage.objects.filter(
                Q(alt__icontains=query)
            ), many=True).data,

            'internships': InternshipSerializer(Internship.objects.filter(
                Q(title__icontains=query) | Q(post__icontains=query)
            ), many=True).data,

            'albums': PhotoAlbumSerializer(PhotoAlbum.objects.filter(
                Q(title__icontains=query)
            ), many=True).data,

            'videos': VideoSerializer(Video.objects.filter(
                Q(title__icontains=query)
            ), many=True).data,

            'staff': StaffSerializer(Staff.objects.filter(
                Q(name__icontains=query) | Q(position__icontains=query)
            ), many=True).data,

            'board_members': BoardMemberSerializer(BoardMember.objects.filter(
                Q(name__icontains=query) | Q(position__icontains=query)
            ), many=True).data,

            'officials': OfficialSerializer(Official.objects.filter(
                Q(name__icontains=query) | Q(title__icontains=query)
            ), many=True).data,
        })

        return Response(results)



class BoardMemberViewSet(viewsets.ModelViewSet):
    queryset = BoardMember.objects.all()
    serializer_class = BoardMemberSerializer


class CEOViewSet(viewsets.ModelViewSet):
    queryset = CEO.objects.all().order_by('joining_date')
    serializer_class = CEOSerializer


class StaffViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Staff.objects.all().order_by('name')
    serializer_class = StaffSerializer


class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

    def get_serializer_context(self):
        return {'request': self.request}


class OfficialViewSet(viewsets.ModelViewSet):
    queryset = Official.objects.all().order_by('priority')
    serializer_class = OfficialSerializer
