from django.db import models
from rest_framework import serializers

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