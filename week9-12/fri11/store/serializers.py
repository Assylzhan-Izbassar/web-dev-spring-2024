from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=255)

    def create(self, validated_data):
        return Product.objects.create(**validated_data)