from django.shortcuts import render
from django.http import JsonResponse



def index(request):
    return render(request, 'Main_Page/index.html')

def contact(request):
    return render(request, 'Main_Page/contact.html')