from django.db import models

# Create your models here.
class Adminmodel(models.Model):
    admin_name = models.CharField(max_length=50)
    admin_id = models.CharField(max_length=20,unique=True)
    admin_password = models.CharField(max_length=20)
    class Meta:
        db_table = 'Admin'
        verbose_name_plural = 'Admin'

    def __str__(self):
        return self.admin_name