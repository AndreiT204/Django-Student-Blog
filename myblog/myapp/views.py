from django.shortcuts import render, get_object_or_404, redirect
from .models import Post, Review
from .forms import ReviewForm

def home(request):
    posts = Post.objects.all().prefetch_related('reviews')
    return render(request, 'myapp/index.html', {'posts': posts})

def post_detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    return render(request, 'myapp/post_detail.html', {'post': post})

def about(request):
    return render(request, 'myapp/about.html')

def form(request):
    return render(request, 'myapp/form.html')

def chatbot(request):
    return render(request, 'myapp/chatbot.html')

def gallery(request):
    return render(request, 'myapp/gallery.html')

def submit_review(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            review = form.save(commit=False)
            review.post = post
            review.save()
            return redirect('index')  # Redirect to home or post detail page
    else:
        form = ReviewForm()
    return render(request, 'myapp/submit_review.html', {'form': form, 'post': post})

def update_review(request, review_id):
    review = get_object_or_404(Review, pk=review_id)
    if request.method == 'POST':
        form = ReviewForm(request.POST, instance=review)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form = ReviewForm(instance=review)
    return render(request, 'myapp/update_review.html', {'form': form})

def delete_review(request, review_id):
    review = get_object_or_404(Review, pk=review_id)
    if request.method == 'POST':
        review.delete_review()
        return redirect('index')
    return render(request, 'myapp/delete_review.html', {'review': review})
