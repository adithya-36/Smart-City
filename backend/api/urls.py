from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CareerViewSet, TenderViewSet, GovernmentOrderViewSet, NewsViewSet,
    ConclaveSpeakerViewSet, ConclaveRecordingViewSet, AnniversaryImageViewSet,
    InaugurationImageViewSet, LatestNewsViewSet, ContactMessageViewSet,
    ComplaintViewSet, PollFeedbackCreateView, MonthlyProgressReportViewSet,
    InternshipViewSet, PhotoAlbumViewSet
)

router = DefaultRouter()
router.register(r'careers', CareerViewSet)
router.register(r'tenders', TenderViewSet)
router.register(r'government-orders', GovernmentOrderViewSet)
router.register(r'news', NewsViewSet)
router.register(r'conclave-speakers', ConclaveSpeakerViewSet)
router.register(r'conclave-recordings', ConclaveRecordingViewSet)
router.register(r'anniversary-images', AnniversaryImageViewSet)
router.register(r'inauguration-images', InaugurationImageViewSet)
router.register(r'latest-news', LatestNewsViewSet, basename='latest-news')
router.register(r'contact-messages', ContactMessageViewSet)
router.register(r'complaints', ComplaintViewSet)
router.register(r'mpr', MonthlyProgressReportViewSet, basename='mpr')
router.register(r'internships', InternshipViewSet, basename='internships')
router.register(r'albums', PhotoAlbumViewSet, basename='photo-album')

urlpatterns = [
    path('', include(router.urls)),
    path('api/poll-feedback/', PollFeedbackCreateView.as_view(), name='poll-feedback'),
]
