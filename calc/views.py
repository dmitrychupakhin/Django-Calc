from django.shortcuts import render
from django.views.generic import TemplateView

class CalcView(TemplateView):
    template_name = 'calc/calc.html'