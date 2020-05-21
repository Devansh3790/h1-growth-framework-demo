"""
WSGI config for config project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

env_name = os.environ.get('ENVIRONMENT', 'production')

os.environ.setdefault('DJANGO_SETTINGS_MODULE', f'config.settings.{env_name}')

application = get_wsgi_application()
