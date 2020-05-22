from rest_framework.serializers import ModelSerializer
from .models import PhoneBook


class PhoneBookSerializer(ModelSerializer):
    class Meta:
        model = PhoneBook
        fields = '__all__'