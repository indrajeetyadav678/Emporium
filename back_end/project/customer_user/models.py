from django.db import models

# Create your models here.
class Customermodel(models.Model):
    customer_id = models.CharField(max_length=20 )
    customer_first_name = models.CharField(max_length=30)
    customer_last_name = models.CharField(max_length=30)
    customer_number = models.IntegerField()

    def __str__(self):
        return self.customer_id