from django.db import models
import uuid

# Create your models here.
def generated_admin_id():
    return f'"admin"+{str(uuid.uuid4())[:4]}'

class Addproductmodel(models.Model):
    a_product_id = models.CharField(max_length=20,unique=True)
    image = models.ImageField(upload_to='images/')
    price = models.IntegerField()
    description = models.CharField(max_length=200)
    type = models.CharField(max_length=50)

    class Meta:
        db_table = 'AProduct'
        verbose_name_plural = 'AProduct'
    
    def save(self, *args, **kwargs):
        if not self.admin_id:
            a_product_id = generated_admin_id()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.a_product_id