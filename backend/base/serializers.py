from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product
from .models import Image

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'
