from django.db import models


class Pokemon(models.Model):
    number = models.IntegerField()
    name = models.CharField(max_length=100)
    image = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


def __str__(self):
    return self.name
