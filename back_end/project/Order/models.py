from django.db import models
from customer_user.models import Customermodel

# Create your models here.
class Ordermodel(models.Model):
    order_id = models.CharField(max_length=20 , unique=True)
    order_date = models.DateTimeField()
    order_number = models.IntegerField(unique=True)
    order_amount = models.IntegerField()
    customer_id = models.ForeignKey(Customermodel , on_delete=models.PROTECT)

    def __str__(self):
        return self.customer_id