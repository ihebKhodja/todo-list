from django import views
from django.urls import path,include
from . import views

urlpatterns = [
    path('notes', views.TodoList.as_view(), name='todo_list'),
    path('notes/<int:pk>', views.TodoDetail.as_view(), name='todo_detail'),
]
