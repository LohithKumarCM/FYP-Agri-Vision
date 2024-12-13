from django.shortcuts import render
from django.http import JsonResponse



def hello(request):
    return render(request, 'agri_vision/1.html')