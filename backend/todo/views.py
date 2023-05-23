from django.shortcuts import render
from rest_framework import viewsets
from .models import TODO
from .serializers import Todoserializers

class TodoView(viewsets.ModelViewSet):
    """
    A TodoView for the API:
    The viewsets base class provides the implementation for CRUD operations by default. 
    This code specifies the serializer_class and the queryset.
    """

    serializer_class = Todoserializers
    queryset = TODO.objects.all()
