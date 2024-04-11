from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Product
from .serializers import ProductSerializer

class ProductView(APIView):
    def get(self, request):
        queryset = Product.objects.all()
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': 'Data is invalid!'}, status=status.HTTP_400_BAD_REQUEST)
    
    def put():
        return
    
    def delete(self, request, id):
        Product.objects.delete(id)
        return Response(status=status.HTTP_204_NO_CONTENT)