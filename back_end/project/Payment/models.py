from django.db import models
from customer_user.models import Customermodel

# Create your models here.
class Paymentmodel(models.Model):
    payment_id = models.CharField(max_length=20, unique=True)
    payment_date = models.DateTimeField()
    payment_amount = models.IntegerField()
    customer_id = models.ForeignKey(Customermodel , on_delete=models.PROTECT)

    def __str__(self):
        return self.customer_id