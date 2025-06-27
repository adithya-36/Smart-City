from django.contrib import admin
from .models import Career, Tender
from .models import News, ConclaveSpeaker, ConclaveRecording, AnniversaryImage, InaugurationImage
# Register your models here.
admin.site.register(Career)
admin.site.register(Tender)
admin.site.register(News)
admin.site.register(ConclaveSpeaker)
admin.site.register(ConclaveRecording)
admin.site.register(AnniversaryImage)
admin.site.register(InaugurationImage)