from django.db import models;
from config.constants import *
from cloudinary.models import CloudinaryField


# Create your models here.
class Item(models.Model):
    class Meta:
        db_table = "item"

    status = models.CharField(
         'status', blank=False, null=False, db_index=True, choices=STATUS, default="inactive", max_length=120
        )
    name = models.CharField(
        'Name', blank=False, null=False, db_index=True, max_length=120
    )    
    price = models.CharField(
        'Price', blank=False, null=False, db_index=True, max_length=11
    )
    image = CloudinaryField(
        'Image', blank=False, null=False, 
    )
    created_at = models.DateTimeField(
        'Created DateTime', blank=True , auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated DateTime' , blank=True , auto_now=True
    )