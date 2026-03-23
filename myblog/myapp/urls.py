from django.urls import path
from . import views
urlpatterns = [
path('', views.home, name='index'),
path('review/<int:post_id>/submit/', views.submit_review, name='submit_review'),
path('about/', views.about, name='about'),
path('form/', views.form, name='form'),
path('chatbot/', views.chatbot, name='chatbot'),
path('gallery/', views.gallery, name='gallery'),
path('post/<int:post_id>/', views.post_detail, name='post_detail'),
path('update-review/<int:review_id>/', views.update_review, name='update_review'),
path('delete-review/<int:review_id>/', views.delete_review, name='delete_review'),
]