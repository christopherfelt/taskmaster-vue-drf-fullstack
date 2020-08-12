from django.urls import path
from .views import Users, UserCreateAPIView


urlpatterns = [
    path("", Users.as_view()),
    path("create/", UserCreateAPIView.as_view())
]
