from django.urls import path
from . import views

urlpatterns = [
    path("",views.index_view, name="home"),
    path("recommend/",views.recommend_view, name="recommend"),
    # path("read/<str:pk>/",views.read_lawyers, name="read")
]
