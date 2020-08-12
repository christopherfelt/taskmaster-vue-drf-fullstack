from django.db import models
from django.contrib.auth import get_user_model


class List(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    color = models.CharField(max_length=10)


class Task(models.Model):
    list_id = models.ForeignKey(List, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    complete = models.BooleanField()