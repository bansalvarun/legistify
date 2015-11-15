from django.shortcuts import render, get_object_or_404, redirect

def home(request):
	return render(request, 'index.html')
def about(request):
	return render(request, 'about.html')
def team(request):
	return render(request, 'team.html')
def careers(request):
	return render(request, 'careers.html')
def forLawyers(request):
	return render(request, 'forLawyers.html')	