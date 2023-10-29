from django import forms

class RecommenderForm(forms.Form):
    search_term = forms.CharField(max_length=200)