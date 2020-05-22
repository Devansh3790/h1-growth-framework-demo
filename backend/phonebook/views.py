from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from .models import PhoneBook
from .serializers import PhoneBookSerializer

class PhoneBookViewSet(ModelViewSet):
    queryset = PhoneBook.objects.all()
    serializer_class = PhoneBookSerializer
    permission_classes = (IsAuthenticated,)