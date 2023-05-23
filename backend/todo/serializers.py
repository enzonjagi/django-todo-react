from rest_framework import serializers
from .models import TODO

class Todoserializers(serializers.ModelSerializer):
    """
    We need this serializer to convert model instances to JSON,
    so that the frontend can work with the received data.
    """

    class Meta:
        model = TODO
        fields = ('id', 'title', 'description', 'completed')