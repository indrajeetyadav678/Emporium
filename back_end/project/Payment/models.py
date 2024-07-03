from django.db import models
from Customer.models import Customer

# Create your models here.
class Payment(models.Model):
    payment_date = models.DateTimeField()
    payment_id = models.CharField(max_length=20,unique=True)
    payment_amount = models.IntegerField()
    Customer_id = models.ForeignKey(Customer , on_delete=models.PROTECT,null=True)

