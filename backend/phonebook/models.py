from django.db import models

class PhoneBook(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    phone = models.CharField(max_length=15)
    address = models.CharField(max_length=250)

    class Meta:
        verbose_name = 'phone_book'