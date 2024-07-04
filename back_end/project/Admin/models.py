from django.db import models

# Create your models here.
class AdminData(models.Model):
    admin_name = models.CharField(max_length=50)
    amin_id = models.CharField(max_length=20,unique=True)
    admin_password = models.CharField(max_length=20)