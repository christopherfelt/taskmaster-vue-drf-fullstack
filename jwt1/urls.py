from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

from .views import AppView

urlpatterns = [
    path('', AppView.as_view()),
    path('admin/', admin.site.urls),
    path('auth/obtain_token/', obtain_jwt_token),
    path('auth/refresh_token/', refresh_jwt_token),
    path('user/', include('users.urls')),
    path('lists/', include('lists.urls')),
]
