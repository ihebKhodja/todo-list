from pydoc import describe
from pyexpat import model
from statistics import mode
from tokenize import blank_re
from turtle import title
from django.db import models

class Todo(models.Model):
    title=models.CharField(max_length=200)
    description = models.TextField(blank=True)
    completed= models.BooleanField(default=False)
    
    def __str__(self) :
        return self.title
