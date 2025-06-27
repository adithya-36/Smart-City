from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import (
    CareerViewSet, TenderViewSet, NewsViewSet,
    LatestNewsViewSet,
    ConclaveSpeakerViewSet, ConclaveRecordingViewSet,
    AnniversaryImageViewSet, InaugurationImageViewSet,
)

router = DefaultRouter()
router.register(r'careers', CareerViewSet)
router.register(r'tenders', TenderViewSet)
router.register(r'news', NewsViewSet)
router.register(r'latest-news', LatestNewsViewSet, basename='latest-news')
router.register(r'conclave-speakers', ConclaveSpeakerViewSet)
router.register(r'conclave-recordings', ConclaveRecordingViewSet)
router.register(r'anniversary-images', AnniversaryImageViewSet)
router.register(r'inauguration-images', InaugurationImageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
