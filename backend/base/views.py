from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .products import products
from .models import Product
from .models import Image
from .serializers import ProductSerializer
from .serializers import ImageSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/images/',
        '/api/products/',
        '/api/products/create/',
        '/api/products/delete/<id>',
        '/api/products/<id>/reviews',
        '/api/products/<update>/<id>',
        '/api/products/<id>',
        '/api/products/features',
        '/api/products/new',

    ]

    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all().order_by('-id')
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
    product = None
    for i in products:
        if i['id'] == pk:
            product = i
            break
    return Response(product)

@api_view(['GET'])
def getImages(request):
    images = Image.objects.order_by('uploadAt')
    serializer = ImageSerializer(images, many=True)
    return Response(serializer.data)
