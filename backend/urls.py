from django.contrib import admin
from todo import urls
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('todo.urls')),
]
