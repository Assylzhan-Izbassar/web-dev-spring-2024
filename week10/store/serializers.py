from rest_framework import serializers


class CategorySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=150)


class ProductSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=150)
    price = serializers.DecimalField(max_digits=6, decimal_places=2)
