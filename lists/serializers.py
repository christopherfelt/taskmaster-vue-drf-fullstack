from rest_framework import serializers
from .models import List, Task
from django.contrib.auth import get_user_model


class ListSerializer(serializers.ModelSerializer):
    class Meta:
        model = List
        fields = "__all__"

    # def create(self, validated_data):
    #     validated_data['user'] = get_user_model()
    #     data = super(ListSerizalizer, self).create(validated_data)
    #     return data


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"