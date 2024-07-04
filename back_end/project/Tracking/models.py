from django.db import models

# Create your models here.
class Tracking(models.Model):
    tracking_id = models.IntegerField()
    details = models.CharField(max_length=200)