from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=150)
    price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self) -> str:
        return self.title
