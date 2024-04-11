from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer


@api_view()
def say_hello(request):
    # return HttpResponse('Hello, Django!')
    # return render(request, 'index.html', {
    #     'products': list(queryset)
    # })
    return Response({'name': 'Alex',})


@api_view(['GET',])
def get_products(request):
    queryset = Product.objects.all()
    serializer = ProductSerializer(queryset, many=True)
    return Response(serializer.data)
