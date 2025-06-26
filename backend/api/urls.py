from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CareerViewSet, TenderViewSet

router = DefaultRouter()
router.register(r'careers', CareerViewSet)
router.register(r'tenders', TenderViewSet)

urlpatterns = [
    path('', include(router.urls)),
    
]
