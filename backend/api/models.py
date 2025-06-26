from django.db import models

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

