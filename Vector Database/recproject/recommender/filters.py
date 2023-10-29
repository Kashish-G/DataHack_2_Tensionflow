import django_filters
from django_filters.filters import CharFilter
from .models import Lawyer


class LawyerFilter(django_filters.FilterSet):
    Lawyer_Name = CharFilter(lookup_expr="icontains")
    class Meta:
        model = Lawyer
        fields = ["Lawyer_Name"]