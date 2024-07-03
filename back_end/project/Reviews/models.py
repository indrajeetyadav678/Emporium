from django.db import models
from Customer.models import Customer

# Create your models here.
class Reviews(models.Model):
    customer_id = models.ForeignKey(Customer,  on_delete=models.PROTECT,null=True )
    product_id = models.CharField(max_length=20)
    feedback = models.CharField(max_length=500)
    review_id = models.CharField(max_length=20)