from django.db import models
import uuid

# Create your models here.
def generated_admin_id():
    return f'"admin"+{str(uuid.uuid4())[:4]}'

class Customermodel(models.Model):
    customer_id = models.CharField(max_length=20,unique=True)
    image = models.ImageField(upload_to='images/')
    description = models.CharField(max_length=100)
    type = models.CharField(max_length=50)

    class Meta:
        db_table = 'Customer'
        verbose_name_plural = 'Customer'
    
    def save(self, *args, **kwargs):
        if not self.admin_id:
            customer_id = generated_admin_id()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.customer_id