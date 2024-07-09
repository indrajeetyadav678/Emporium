from django.db import models
import uuid

# Create your models here.

def generated_admin_id():
    return f'"admin"+{str(uuid.uuid4())[:4]}'



class Adminmodel(models.Model):
    admin_id = models.CharField(max_length=20,unique=True)
    admin_name = models.CharField(max_length=50)
    admin_password = models.CharField(max_length=20)
    class Meta:
        db_table = 'Admin'
        verbose_name_plural = 'Admin'
    
    def save(self, *args, **kwargs):
        if not self.admin_id:
            admin_id = generated_admin_id()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.admin_name