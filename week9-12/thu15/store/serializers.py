from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.CharField(max_length=255)
    price = serializers.DecimalField(max_digits=6, decimal_places=2)

    def create(self, validated_data):
        # return super().create(validated_data)
        return Product.objects.create(**validated_data)