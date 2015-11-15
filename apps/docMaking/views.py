from django.shortcuts import render, get_object_or_404, redirect
from .models import *
# Create your views here.

def categories(request):
	args = {}
	categories = Category.objects.all()
	args['categories'] = categories
	return render(request, 'categories.html', args)

def document(request, url):
	args = {}
	document = get_object_or_404(Document, url=url)
	args['document'] = document
	return render(request, 'document.html', args)

def makeDocument(request, url):
	args = {}
	document = get_object_or_404(Document, url=url)
	args['document'] = document
	return render(request, 'makeDocument.html', args)
