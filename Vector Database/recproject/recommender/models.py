from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import MaxValueValidator, MinValueValidator
import math

# Create your models here.

class Lawyer(models.Model):
    Rating = models.CharField(
        max_length=5,
    )

    
    Jurisdiction = models.CharField(max_length=100)
    
    Charges = models.IntegerField(
        validators=[
            MaxValueValidator(limit_value=1000),
            MinValueValidator(limit_value=1)
        ]
    )
    
    Days_of_disposal = models.IntegerField(
        validators=[
            MaxValueValidator(limit_value=1000),
            MinValueValidator(limit_value=1)
        ]
    )
    
    City = models.CharField(max_length=100)
    
    Years_of_Experience = models.IntegerField(
        validators=[
            MaxValueValidator(limit_value=100),
            MinValueValidator(limit_value=0)
        ]
    )
    
    Type_of_Lawyer = models.CharField(max_length=100)
    
    Languages = models.CharField(max_length=100)
    
    Pro_bono = models.CharField(max_length=5)
    
    Lawyer_Name = models.CharField(max_length=100)
    
    Lawfirms = models.CharField(max_length=100)
    
    Demography = models.CharField(max_length=100)
    
    Gender = models.CharField(max_length=100)
    
    