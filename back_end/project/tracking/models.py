from django.db import models

# Create your models here.
class DeliveryTrackingmodel(models.Model):
    tracking_id = models.IntegerField()
    details = models.CharField(max_length=200)

    def __str__(self):
        return self.tracking_id