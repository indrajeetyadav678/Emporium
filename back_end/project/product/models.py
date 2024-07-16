from django.db import models

# Create your models here.
class Productmodel(models.Model):
    product_id = models.CharField(max_length=20, unique=True, primary_key=True)
    product_type = models.CharField(max_length=30, null=True)
    product_name = models.CharField(max_length=50 , null=True)
    product_price = models.IntegerField( null=True)
    product_status = models.CharField(max_length=50, default="Instock", null=True)
    product_image1 = models.ImageField(upload_to='', null=True)
    product_image2 = models.ImageField(upload_to='', null=True)
    product_image3 = models.ImageField(upload_to='', null=True)
    product_image4 = models.ImageField(upload_to='', null=True)
    product_colour = models.CharField(max_length=20, null=True)
    product_brand = models.CharField(max_length=30, null=True)
    product_description = models.CharField(max_length=500, null=True)

    def __str__(self):
        return self.product_name