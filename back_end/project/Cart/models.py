from django.db import models

# Create your models here.
class Cart(models.Model):
    pro_cart_id = models.CharField(max_length=20,unique=True)
    cart_quantity = models.IntegerField()
