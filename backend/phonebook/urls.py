from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PhoneBookViewSet

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register('phonebook', PhoneBookViewSet, basename='phonebook')

urlpatterns = [
    path('', include(router.urls))
]