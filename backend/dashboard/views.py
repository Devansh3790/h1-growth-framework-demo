# pages/views.py
from django.http import HttpResponse


def homePageView(request):
    return HttpResponse('<h1>Hi! This is comming from django app...</h1>')