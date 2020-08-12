from django.urls import path
from .views import ListCollection, ListDetail, TaskCollection, TaskDetail

urlpatterns = [
    path('', ListCollection.as_view()),
    path('<int:pk>/', ListDetail.as_view()),
    path('<int:list_id>/tasks/', TaskCollection.as_view()),
    path('<int:list_id>/tasks/<int:task_id>/', TaskDetail.as_view())
]
