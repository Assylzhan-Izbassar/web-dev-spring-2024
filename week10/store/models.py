from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=150)


class Product(models.Model):
    title = models.CharField(max_length=150)
    actor = models.CharField(max_length=150)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.RESTRICT)
