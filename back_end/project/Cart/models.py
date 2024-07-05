from django.db import models
from customer_user.models import Customermodel

# Create your models here.
class Cartmodel(models.Model):
    pro_cart_id = models.CharField(max_length=20,unique=True)
    customer_id = models.ForeignKey(Customermodel, on_delete=models.CASCADE)
    cart_quantity = models.IntegerField()
    class Meta:
        db_table = 'Cart'
        verbose_name_plural = 'Cart'

    def __str__(self):
        return self.pro_cart_id