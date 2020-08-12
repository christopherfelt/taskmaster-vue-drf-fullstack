from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.http import Http404, HttpResponse

from .models import List, Task
from .serializers import ListSerializer, TaskSerializer


class ListCollection(APIView):

    permission_classes = [IsAuthenticated]
    
    def get(self, request, format=None):
        lists = List.objects.filter(user=request.user)
        serializer = ListSerializer(lists, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
    def post(self, request, format=None):
        request.data["user"] = request.user.pk
        serializer = ListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ListDetail(APIView):

    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return List.objects.get(pk=pk)
        except List.DoesNotExist:
            raise Http404

    def put(self, request, pk, format=None):
        list = self.get_object(pk)
        request.data['user'] = request.user.pk
        serializer = ListSerializer(list, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        list = self.get_object(pk)
        list.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class TaskCollection(APIView):

    permission_classes = [IsAuthenticated]
    
    def get(self, request, list_id, format=None):
        tasks = Task.objects.filter(list_id=list_id)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
    def post(self, request, list_id, format=None):
        list = List.objects.get(pk=list_id)
        if (request.user == list.user):
            request.data['list_id'] = list_id
            request.data['complete'] = False
            serializer = TaskSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_400_BAD_REQUEST)
        # return HttpResponse(request.user)


class TaskDetail(APIView):

    permission_classes = [IsAuthenticated]

    def get_object(self, pk):
        try:
            return Task.objects.get(pk=pk)
        except Task.DoesNotExist:
            raise Http404

    def put(self, request, list_id, task_id, format=None):
        list = List.objects.get(pk=list_id)
        if (request.user == list.user):
            task = self.get_object(task_id)
            request.data['list_id'] = list_id
            serializer = TaskSerializer(task, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, list_id, task_id, format=None):
        list = List.objects.get(pk=list_id)
        if (request.user == list.user):
            task = self.get_object(task_id)
            task.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_400_BAD_REQUEST)