from django.shortcuts import render

def index(request):
    return render (request, "index.html")

def imc(request):
    return render (request, "imc.html")