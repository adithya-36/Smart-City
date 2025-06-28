from django.db import models
from rest_framework import serializers
from simple_history.models import HistoricalRecords
class Career(models.Model):
    no = models.PositiveIntegerField(unique=True, default=1)
    title = models.CharField(max_length=255)
    status = models.CharField(max_length=50, default='Published')
    pdf = models.FileField(upload_to='careers/', blank=True, null=True)
    posted_on = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

class Tender(models.Model):
    no = models.CharField(max_length=100, unique=True, default='TEMP_NO')
    title = models.CharField(max_length=255)
    status = models.CharField(max_length=50, choices=[('Open', 'Open'), ('Closed', 'Closed')], default='Open')
    pdf = models.FileField(upload_to='tenders/')
    uploaded_on = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

class TimeStampedModel(models.Model):
    title = models.CharField(max_length=255)
    date = models.DateTimeField()
    description = models.TextField()
    image = models.ImageField(upload_to='events/')
    source = models.CharField(max_length=255, blank=True)
    link = models.URLField(blank=True)

    class Meta:
        abstract = True

class News(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateTimeField()
    excerpt = models.TextField()
    source = models.CharField(max_length=100)
    link = models.URLField()
    image = models.ImageField(upload_to='news/')
    type = models.CharField(max_length=100, default="news")  

    def __str__(self):
        return self.title

# Conclave Speakers
class ConclaveSpeaker(models.Model):
    name = models.CharField(max_length=255)
    designation = models.CharField(max_length=255)
    image = models.ImageField(upload_to="conclave/speakers/")

    def __str__(self):
        return self.name

# Conclave Recording
class ConclaveRecording(models.Model):
    title = models.CharField(max_length=255)
    date = models.CharField(max_length=100)
    youtube_link = models.URLField()

    def __str__(self):
        return self.title
    
# Anniversary Image
class AnniversaryImage(models.Model):
    image = models.ImageField(upload_to="anniversary/")
    alt = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.alt or "Anniversary Image"

# Inauguration Image
class InaugurationImage(models.Model):
    image = models.ImageField(upload_to="inauguration/")
    alt = models.CharField(max_length=255)

    def __str__(self):
        return self.alt

class NewsSerializer(serializers.ModelSerializer):
    formatted_date = serializers.DateTimeField(source='date', format="%B %d, %Y %I:%M %p")

    class Meta:
        model = News
        fields = ['id', 'title', 'formatted_date', 'excerpt', 'source', 'link', 'image', 'type']

class GovernmentOrder(models.Model):
    title = models.TextField()
    date = models.DateField()
    pdf = models.FileField(upload_to='govt_orders/')

    def __str__(self):
        return self.title
    
class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    history = HistoricalRecords()
    def __str__(self):
        return f"Message from {self.name} ({self.email})"
    
class Complaint(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    project = models.CharField(max_length=255)
    complaint = models.TextField()
    attachment = models.FileField(upload_to='complaints/', null=True, blank=True)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.project}"
    
class PollFeedback(models.Model):
    CHOICES = (
        ('nice', 'Nice'),
        ('medium', 'Medium'),
        ('bad', 'Bad'),
    )
    rating = models.CharField(max_length=10, choices=CHOICES)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.rating
    
class MonthlyProgressReport(models.Model):
    month = models.CharField(max_length=100)
    file = models.FileField(upload_to='mpr_reports/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.month
    
class Internship(models.Model):
    STATUS_CHOICES = (
        ('Open', 'Open'),
        ('Closed', 'Closed'),
    )

    post = models.CharField(max_length=255)
    title = models.TextField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)
    date = models.CharField(max_length=255, blank=True)
    pdf_link = models.FileField(upload_to='internships/', blank=True, null=True)
    external_url = models.URLField(blank=True, null=True)  # Optional for links

    def __str__(self):
        return self.post
    
class PhotoAlbum(models.Model):
    title = models.CharField(max_length=255)
    thumbnail = models.ImageField(upload_to='gallery/thumbnails/')

    def __str__(self):
        return self.title

class Photo(models.Model):
    album = models.ForeignKey(PhotoAlbum, related_name='photos', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='gallery/photos/')
    caption = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.album.title} - {self.caption or 'Image'}"