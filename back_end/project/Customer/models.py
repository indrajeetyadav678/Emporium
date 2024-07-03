from django.db import models

# Create your models here.
class Customer(models.Model):
    customer_id = models.CharField(max_length=20)
    customer_first_name = models.CharField(max_length=30)
    customer_last_name = models.CharField(max_length=30)
    customer_number = models.IntegerField()
