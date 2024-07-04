from django.db import models
from Customer.models import Customer

# Create your models here.
class Order(models.Model):
    order_number = models.IntegerField(unique=True)
    order_date = models.DateTimeField()
    order_amount = models.IntegerField()
    order_id = models.CharField(max_length=20 , unique=True)
    customer_id = models.ForeignKey(Customer , on_delete=models.PROTECT,null=True)
