from django.shortcuts import render
from rest_framework import viewsets
from .models import Career, Tender
from .serializers import CareerSerializer, TenderSerializer

class CareerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Career.objects.all().order_by('-posted_on')
    serializer_class = CareerSerializer

class TenderViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Tender.objects.all().order_by('-uploaded_on')
    serializer_class = TenderSerializer
