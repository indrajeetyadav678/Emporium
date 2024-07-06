from django.db import models

# Create your models here.
class Productmodel(models.Model):
    product_name = models.CharField(max_length=50)
    product_id = models.CharField(max_length=20)
    product_price = models.IntegerField()
    product_status = models.CharField(max_length=50, default="Instock")
    product_image = models.ImageField(upload_to='')
    product_colour = models.CharField(max_length=20)
    product_brand = models.CharField(max_length=30)
    product_wieght = models.CharField(max_length=20)
    product_description = models.CharField(max_length=500)

    def __str__(self):
        return self.product_name