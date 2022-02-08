from .models import Item
from django.shortcuts import render
from rest_framework import generics
from.serializers import ItemSerializer
# Create your views here.


class ItemList(generics.ListAPIView):
    queryset = Item.objects.order_by(
        'created_at').reverse().filter(status='active')
    serializer_class = ItemSerializer
