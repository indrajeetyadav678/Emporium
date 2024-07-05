from django.db import models
from customer_user.models import Customermodel

# Create your models here.
class Reviewsmodel(models.Model):
    customer_id = models.ForeignKey(Customermodel,  on_delete=models.PROTECT )
    product_id = models.CharField(max_length=20)
    feedback = models.CharField(max_length=500)
    review_id = models.CharField(max_length=20)

    def __str__(self):
        return self.customer_id