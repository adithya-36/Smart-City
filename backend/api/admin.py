from django.contrib import admin
from .models import (
    Career, Tender, News, ContactMessage, ConclaveSpeaker, 
    ConclaveRecording, AnniversaryImage, InaugurationImage, 
    GovernmentOrder, Complaint,PollFeedback,MonthlyProgressReport,Internship,
    PhotoAlbum, Photo, Video, MediaItem, EventItem, ContactInfo, BoardMember
)
from simple_history.admin import SimpleHistoryAdmin
# Photo Album and Photos - custom inline admin
class PhotoInline(admin.TabularInline):
    model = Photo
    extra = 1  # show 1 extra empty photo field

@admin.register(PhotoAlbum)
class PhotoAlbumAdmin(admin.ModelAdmin):
    list_display = ('title',)
    inlines = [PhotoInline]

# Custom admin for Complaint model
@admin.register(Complaint)
class ComplaintAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'project', 'submitted_at')
    readonly_fields = ('submitted_at',)
    search_fields = ('name', 'email', 'project')
    list_filter = ('submitted_at',)
    fieldsets = (
        (None, {
            'fields': ('name', 'email', 'project', 'complaint', 'attachment', 'submitted_at')
        }),
    )
@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('title', 'youtube_url')

# Registering other models
admin.site.register(Career)
admin.site.register(Tender)
admin.site.register(GovernmentOrder)
admin.site.register(News)
admin.site.register(ConclaveSpeaker)
admin.site.register(ConclaveRecording)
admin.site.register(AnniversaryImage)
admin.site.register(InaugurationImage)
admin.site.register(ContactMessage, SimpleHistoryAdmin)
admin.site.register(PollFeedback)
admin.site.register(MonthlyProgressReport)
admin.site.register(Internship)
admin.site.register(MediaItem)
admin.site.register(EventItem)
admin.site.register(ContactInfo)

@admin.register(BoardMember)
class BoardMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'position', 'field']