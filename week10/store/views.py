from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product
from .serializers import ProductSerializer


# @api_view()
def say_hello(request):
    query_set = Product.objects.all()
    # return HttpResponse('Hello, World!')
    return render(request, 'hello.html', context={
            'products': list(query_set),
        })
    # return Response({'message': 'Hello, world!'})


@api_view()
def get_product(request):
    query_set = Product.objects.all()
    serializer = ProductSerializer(query_set, many=True)
    return Response(serializer.data)
